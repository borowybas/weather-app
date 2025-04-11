import React from "react";
import '../styles/FilterSelector.scss';

const FilerSelector = ({selectedFilters, setSelectedFilters}: {
    selectedFilters: {[key: string]: boolean},
    setSelectedFilters: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
}) => {

    const filters = [
        { key: "temp_c", label: "Temperature (°C)" },
        { key: "temp_f", label: "Temperature (°F)" },
        { key: "condition", label: "Condition" },
        { key: "wind_kph", label: "Wind (km/h)" },
        { key: "wind_mph", label: "Wind (mph)" },
        { key: "humidity", label: "Humidity" },
        { key: "precip_mm", label: "Precipitation (mm)" },
        { key: "cloud", label: "Cloudiness (%)" },
        { key: "pressure_mb", label: "Pressure (mb)" },
        { key: "vis_km", label: "Visibility (km)" },
        { key: "uv", label: "UV Index" },
        { key: "feelslike_c", label: "Feels Like (°C)" },
        { key: "feelslike_f", label: "Feels Like (°F)" },
    ];

    const handleCheckboxChange = (filterKey: string) => {
        setSelectedFilters((prev) => {
            const updatedFilters = { ...prev, [filterKey]: !prev[filterKey]};
            localStorage.setItem("selectedFilters", JSON.stringify(updatedFilters));
            return updatedFilters;
        });
    };

    return (
        <div className="filter-panel">
            <h3>Filter Weather Informations</h3>
            {filters.map((filter) => (
                <label key={filter.key} className="filter-item">
                    <input
                    type="checkbox" 
                    checked={selectedFilters[filter.key] || false}
                    onChange={() => handleCheckboxChange(filter.key)}    
                />
                {filter.label}
                </label>
            ))}
        </div>
    );
}

export default FilerSelector;