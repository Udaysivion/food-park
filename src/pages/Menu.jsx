export default function Menu() {
  const meals = [
    { name: 'Standard Officers Breakfast', price: '$5.50', desc: 'Oatmeal, scrambled eggs, whole wheat toast, fresh fruit, coffee or tea.', timing: '0600 - 0800 hrs' },
    { name: 'Combat Lunch Rations', price: '$8.50', desc: 'High-protein beef stew or grilled chicken, brown rice, steamed vegetables, and energy bars.', timing: '1200 - 1400 hrs' },
    { name: 'Garrison Dinner Special', price: '$9.50', desc: 'Roasted turkey breast, mashed potatoes with gravy, green beans, and freshly baked dinner rolls.', timing: '1800 - 2000 hrs' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Mess Menu</h1>
          <p className="mt-4 text-xl text-gray-500">Scheduled nutritional meals prepared for rank-and-file discipline.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {meals.map((meal) => (
            <div key={meal.name} className="bg-white overflow-hidden shadow-md rounded-lg border border-gray-100 flex flex-col justify-between p-6">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900">{meal.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {meal.price}
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-500">{meal.desc}</p>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4 flex justify-between items-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <span>Shift</span>
                <span className="text-indigo-600">{meal.timing}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
