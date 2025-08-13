"use client";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useProductCustomizer } from "@/hooks/useProductCustomizer";
import { CustomerInfoForm } from "./CustomerInfoForm";
import { FeatureSelector } from "./FeatureSelector";

const ProductCustomizer = ({ productName, productType, features }) => {
  const {
    isOpen,
    setIsOpen,
    isSubmitting,
    selectedFeatures,
    handleFeatureChange,
    form,
    onSubmit,
    isATM
  } = useProductCustomizer(productType);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-blue-50 text-sky-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
      >
        Customize & Get Quote <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-900 dark:text-white">
              Customize Your {productName}
            </DialogTitle>
            <DialogDescription>
              Select your desired features and we'll send you a personalized quote.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="space-y-4">
              <h3 className="font-medium text-lg text-gray-900 dark:text-white">
                1. Select Your Features
              </h3>

              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.id} className="p-4 border rounded-lg">
                    <div className="mb-2 gap-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">{feature.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                    <FeatureSelector
                      feature={feature}
                      selectedFeatures={selectedFeatures}
                      handleFeatureChange={handleFeatureChange}
                      form={form}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg text-gray-900 dark:text-white">
                2. Fill Your Information
              </h3>
              <CustomerInfoForm
                form={form}
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
                setIsOpen={setIsOpen}
                isATM={isATM}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCustomizer;