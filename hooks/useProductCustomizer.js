import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "./use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  atmFormSchema,
  meterFormSchema,
  technologyMap,
} from "@/lib/productSchemas";

export const useProductCustomizer = (productType) => {
  const isATM = productType === "ATM";
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState({});
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(isATM ? atmFormSchema : meterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      quantity: "1",
      installationLocation: "",
    },
  });

  const handleFeatureChange = (featureId, value) => {
    setSelectedFeatures((prev) => ({ ...prev, [featureId]: value }));
  };

  const validateFeatures = () => {
    if (isATM) {
      if (!selectedFeatures["power"]) {
        return "Please select a power configuration";
      }
      if (!selectedFeatures["no-of-taps"]) {
        return "Please select number of taps";
      }
      if (!form.getValues("installationLocation")) {
        return "Please enter installation location";
      }
    } else {
      if (!selectedFeatures["size"]) {
        return "Please select a meter size";
      }
      if (!selectedFeatures["measurement-tech"]) {
        return "Please select a measurement technology";
      }

      const selectedTech = selectedFeatures["measurement-tech"];
      if (!technologyMap[selectedTech]) {
        return "The selected technology is not supported";
      }
    }
    return null;
  };

  const preparePayload = (data) => {
    if (isATM) {
      return {
        client_name: data.name,
        client_email: data.email,
        taps: parseInt(selectedFeatures["no-of-taps"], 10),
        solar_availability: selectedFeatures["power"],
        installation_location: data.installationLocation,
        quantity: parseInt(data.quantity, 10),
      };
    }

    const selectedTech = selectedFeatures["measurement-tech"];
    return {
      client_name: data.name,
      client_email: data.email,
      technology: technologyMap[selectedTech],
      size: selectedFeatures["size"],
      quantity: parseInt(data.quantity, 10),
    };
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const validationError = validateFeatures();
    if (validationError) {
      toast({
        title: "Missing information",
        description: validationError,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = preparePayload(data);
      const endpoint = isATM
        ? "https://api.waterhub.africa/api/v1/client/atm/quote"
        : "https://api.waterhub.africa/api/v1/client/meter/quote";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log(payload);

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.message ||
            `Request failed with status ${response.status}`
        );
      }

      toast({
        title: "Quote request submitted!",
        className: "bg-blue-500 text-white",
        description:
          responseData.message ||
          "We'll send your quote to your email shortly.",
      });

      setIsOpen(false);
      form.reset();
      setSelectedFeatures({});
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error.message || "Please check your inputs and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    isSubmitting,
    selectedFeatures,
    handleFeatureChange,
    form,
    onSubmit,
    isATM,
  };
};
