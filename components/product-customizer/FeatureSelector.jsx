import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LocationAutoComplete from "../LocationAutoComplete";


export const FeatureSelector = ({ 
  feature, 
  selectedFeatures, 
  handleFeatureChange,
  form
}) => {
  if (feature.id === "installation location") {
    return (
      <LocationAutoComplete
        value={form.watch("installationLocation")}
        onChange={(value) => form.setValue("installationLocation", value)}
        placeholder="Enter installation location"
        className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
      />
    );
  }

  return (
    <Select
      value={selectedFeatures[feature.id] || ""}
      onValueChange={(value) => handleFeatureChange(feature.id, value)}
    >
      <SelectTrigger className="bg-white dark:bg-gray-700">
        <SelectValue placeholder={`Select ${feature.name.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent className="bg-gray-50 dark:bg-gray-800">
        {feature.options.map((option) => (
          <SelectItem 
            key={option.value} 
            value={option.value}
            className="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};