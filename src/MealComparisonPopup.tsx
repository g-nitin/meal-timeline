// MealComparisonPopup.tsx
import React from 'react';
import { Meal } from './types';

interface MealComparisonPopupProps {
  meal1: Meal;
  meal2: Meal;
  onClose: () => void;
}

const MealComparisonPopup: React.FC<MealComparisonPopupProps> = ({
  meal1,
  meal2,
  onClose,
}) => {
  // Combine and process ingredients for comparison
  const compareIngredients = () => {
    const allIngredients = new Map<string, { meal1: number; meal2: number }>();
    
    meal1.ingredients.forEach(ing => {
      allIngredients.set(ing.name, {
        meal1: ing.amount,
        meal2: 0
      });
    });

    meal2.ingredients.forEach(ing => {
      const existing = allIngredients.get(ing.name);
      if (existing) {
        existing.meal2 = ing.amount;
      } else {
        allIngredients.set(ing.name, {
          meal1: 0,
          meal2: ing.amount
        });
      }
    });

    return Array.from(allIngredients.entries());
  };

  const ingredients = compareIngredients();
  const maxAmount = Math.max(
    ...ingredients.map(([_, amounts]) => Math.max(amounts.meal1, amounts.meal2))
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[800px] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Meal Comparison</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <h3 className="font-medium">{meal1.name}</h3>
            <p className="text-gray-600">{meal1.time}</p>
          </div>
          <div className="text-center">
            <h3 className="font-medium">{meal2.name}</h3>
            <p className="text-gray-600">{meal2.time}</p>
          </div>
        </div>

        {/* Ingredient Comparison Chart */}
        <div className="space-y-4">
          {ingredients.map(([ingredient, amounts]) => (
            <div key={ingredient} className="relative">
              <div className="text-sm font-medium mb-1">{ingredient}</div>
              <div className="flex items-center gap-4">
                {/* Meal 1 Bar */}
                <div className="w-[300px] flex justify-end">
                  <div
                    className="h-6 bg-blue-400 rounded"
                    style={{
                      width: `${(amounts.meal1 / maxAmount) * 100}%`
                    }}
                  />
                </div>
                
                {/* Amount Labels */}
                <div className="w-20 text-center text-sm">
                  {Math.abs(amounts.meal1 - amounts.meal2).toFixed(1)}
                </div>
                
                {/* Meal 2 Bar */}
                <div className="w-[300px]">
                  <div
                    className="h-6 bg-green-400 rounded"
                    style={{
                      width: `${(amounts.meal2 / maxAmount) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nutritional Comparison */}
        <div className="mt-8">
          <h3 className="font-medium mb-4">Key Differences</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {ingredients
              .filter(([_, amounts]) => amounts.meal1 !== amounts.meal2)
              .map(([ingredient, amounts]) => (
                <div key={ingredient} className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>{ingredient}</span>
                  <span className={amounts.meal1 > amounts.meal2 ? 'text-blue-600' : 'text-green-600'}>
                    {amounts.meal1 > amounts.meal2 ? '↑' : '↓'} 
                    {Math.abs(amounts.meal1 - amounts.meal2).toFixed(1)}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealComparisonPopup;