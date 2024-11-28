import { DayMeals } from "@/types";
import MealCalendarViz from "@/MealCalendarViz";

const sampleData: DayMeals[] = [
  {
    date: '2024-03-18',
    meals: [
      {
        id: '1',
        name: 'Breakfast',
        time: '09:00',
        ingredients: [
          { name: 'eggs', amount: 2, unit: 'pieces', category: 'protein' },
          { name: 'milk', amount: 200, unit: 'ml', category: 'dairy' },
          { name: 'bread', amount: 2, unit: 'slices', category: 'carbs' },
          { name: 'spinach', amount: 50, unit: 'g', category: 'vegetable' }
        ]
      },
      {
        id: '2',
        name: 'Lunch',
        time: '13:00',
        ingredients: [
          { name: 'chicken breast', amount: 200, unit: 'g', category: 'protein' },
          { name: 'rice', amount: 150, unit: 'g', category: 'carbs' },
          { name: 'spinach', amount: 100, unit: 'g', category: 'vegetable' },
          { name: 'olive oil', amount: 15, unit: 'ml', category: 'fats' }
        ]
      },
      {
        id: '3',
        name: 'Dinner',
        time: '19:00',
        ingredients: [
          { name: 'salmon', amount: 200, unit: 'g', category: 'protein' },
          { name: 'rice', amount: 150, unit: 'g', category: 'carbs' },
          { name: 'broccoli', amount: 100, unit: 'g', category: 'vegetable' },
          { name: 'olive oil', amount: 15, unit: 'ml', category: 'fats' }
        ]
      }
    ]
  },
  {
    date: '2024-03-19',
    meals: [
      {
        id: '4',
        name: 'Breakfast',
        time: '08:30',
        ingredients: [
          { name: 'oatmeal', amount: 100, unit: 'g', category: 'carbs' },
          { name: 'milk', amount: 200, unit: 'ml', category: 'dairy' },
          { name: 'banana', amount: 1, unit: 'piece', category: 'fruit' },
          { name: 'honey', amount: 20, unit: 'g', category: 'sweetener' }
        ]
      },
      {
        id: '5',
        name: 'Lunch',
        time: '12:30',
        ingredients: [
          { name: 'chicken breast', amount: 200, unit: 'g', category: 'protein' },
          { name: 'bread', amount: 2, unit: 'slices', category: 'carbs' },
          { name: 'lettuce', amount: 50, unit: 'g', category: 'vegetable' },
          { name: 'olive oil', amount: 10, unit: 'ml', category: 'fats' }
        ]
      },
      {
        id: '6',
        name: 'Dinner',
        time: '18:30',
        ingredients: [
          { name: 'eggs', amount: 3, unit: 'pieces', category: 'protein' },
          { name: 'rice', amount: 150, unit: 'g', category: 'carbs' },
          { name: 'spinach', amount: 100, unit: 'g', category: 'vegetable' },
          { name: 'olive oil', amount: 15, unit: 'ml', category: 'fats' }
        ]
      }
    ]
  }
];

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Weekly Meal Calendar</h1>
      <p className="mb-4">This is a sample weekly meal calendar visualization. <i>Please use with light-mode for now.</i></p>
      <MealCalendarViz weekData={sampleData} />
    </div>
  );
}

export default App;