import React, { useState } from 'react';
import { Flame, Plus, Trash2, RotateCcw, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CalorieCalculatorWidget() {
  const [dailyGoal, setDailyGoal] = useState(2200);
  const [goalInput, setGoalInput] = useState('2200');
  const [items, setItems] = useState([
    { id: 1, name: 'Oatmeal & Almond Milk', calories: 350, meal: 'Breakfast' },
    { id: 2, name: 'Brown Rice & Paneer Curry', calories: 650, meal: 'Lunch' },
    { id: 3, name: 'Greek Yogurt & Walnuts', calories: 250, meal: 'Snack' },
    { id: 4, name: 'Grilled Vegetables & Roti', calories: 450, meal: 'Dinner' }
  ]);
  const [foodName, setFoodName] = useState('');
  const [foodCalories, setFoodCalories] = useState('');
  const [mealCategory, setMealCategory] = useState('Snack');
  const [errorMsg, setErrorMsg] = useState('');

  // Calculate consumed and remaining
  const totalConsumed = items.reduce((sum, item) => sum + item.calories, 0);
  const caloriesRemaining = dailyGoal - totalConsumed;
  const progressPercent = Math.min(100, Math.round((totalConsumed / dailyGoal) * 100));

  const handleGoalChange = (e) => {
    const val = e.target.value;
    setGoalInput(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed > 0 && parsed <= 10000) {
      setDailyGoal(parsed);
      setErrorMsg('');
    } else if (val === '') {
      setErrorMsg('Please enter a valid positive calorie goal.');
    } else {
      setErrorMsg('Goal must be a reasonable number (100 - 10,000 kcal).');
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!foodName.trim()) {
      setErrorMsg('Please provide a food name.');
      return;
    }
    const cal = parseInt(foodCalories, 10);
    if (isNaN(cal) || cal <= 0 || cal > 5000) {
      setErrorMsg('Please enter valid calories (1 - 5,000 kcal).');
      return;
    }

    const newItem = {
      id: Date.now(),
      name: foodName.trim(),
      calories: cal,
      meal: mealCategory
    };

    setItems([...items, newItem]);
    setFoodName('');
    setFoodCalories('');
    setErrorMsg('');
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleReset = () => {
    setDailyGoal(2200);
    setGoalInput('2200');
    setItems([]);
    setErrorMsg('');
  };

  return (
    <div className="bg-dark-950 rounded-2xl p-5 sm:p-6 border border-white/10 text-slate-100 space-y-6">
      
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">Live Interactive Demo</span>
          </div>
          <h4 className="text-lg font-bold text-white mt-1">Calorie Tracker Dashboard</h4>
          <p className="text-xs text-slate-400">Test the real-time goal recalculation & synchronization engine live.</p>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors border border-white/10"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Sample Data</span>
        </button>
      </div>

      {/* Goal Adjustment Control */}
      <div className="glass-card rounded-xl p-4 border border-brand-purple/30 bg-brand-purple/5 space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-purple-300">
          Modify Daily Calorie Target (kcal)
        </label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="number"
            min="500"
            max="10000"
            value={goalInput}
            onChange={handleGoalChange}
            placeholder="e.g. 2200"
            className="flex-1 bg-dark-900 border border-white/20 rounded-lg px-4 py-2.5 text-base font-bold text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
          />
          <div className="flex gap-2">
            <button
              onClick={() => { setGoalInput('2000'); setDailyGoal(2000); setErrorMsg(''); }}
              className="px-3 py-2 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-mono"
            >
              2,000
            </button>
            <button
              onClick={() => { setGoalInput('2500'); setDailyGoal(2500); setErrorMsg(''); }}
              className="px-3 py-2 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-mono"
            >
              2,500
            </button>
            <button
              onClick={() => { setGoalInput('3000'); setDailyGoal(3000); setErrorMsg(''); }}
              className="px-3 py-2 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-mono"
            >
              3,000
            </button>
          </div>
        </div>
        {errorMsg && (
          <div className="flex items-center gap-2 text-xs text-amber-400 pt-1">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* Synchronized Metrics Trio */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Daily Goal */}
        <div className="glass-card rounded-xl p-4 border border-white/10 text-center">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Target Goal</div>
          <div className="text-2xl font-extrabold text-white mt-1">{dailyGoal.toLocaleString()}</div>
          <div className="text-[11px] text-slate-400">kcal / day</div>
        </div>

        {/* Metric 2: Total Consumed */}
        <div className="glass-card rounded-xl p-4 border border-white/10 text-center">
          <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400">Total Consumed</div>
          <div className="text-2xl font-extrabold text-amber-300 mt-1">{totalConsumed.toLocaleString()}</div>
          <div className="text-[11px] text-slate-400">{progressPercent}% of target</div>
        </div>

        {/* Metric 3: Calories Remaining (Recalculates Instantly) */}
        <div className={`glass-card rounded-xl p-4 border text-center transition-colors ${
          caloriesRemaining >= 0 
            ? 'border-emerald-500/40 bg-emerald-950/20' 
            : 'border-rose-500/40 bg-rose-950/20'
        }`}>
          <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
            {caloriesRemaining >= 0 ? 'Calories Remaining' : 'Calorie Surplus'}
          </div>
          <div className={`text-2xl font-extrabold mt-1 ${
            caloriesRemaining >= 0 ? 'text-emerald-300' : 'text-rose-400'
          }`}>
            {caloriesRemaining >= 0 ? caloriesRemaining.toLocaleString() : `+${Math.abs(caloriesRemaining).toLocaleString()}`}
          </div>
          <div className="text-[11px] text-slate-400">
            {caloriesRemaining >= 0 ? 'left today' : 'over target'}
          </div>
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Daily Consumption Progress</span>
          <span className="font-mono font-bold text-white">{totalConsumed} / {dailyGoal} kcal</span>
        </div>
        <div className="w-full bg-dark-900 rounded-full h-3 overflow-hidden border border-white/10 p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              caloriesRemaining >= 0 
                ? 'bg-gradient-to-r from-brand-blue to-emerald-400' 
                : 'bg-gradient-to-r from-amber-500 to-rose-500'
            }`}
            style={{ width: `${Math.min(100, (totalConsumed / dailyGoal) * 100)}%` }}
          />
        </div>
      </div>

      {/* Add Food Item Section */}
      <form onSubmit={handleAddItem} className="space-y-3 pt-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
          Log Meal / Food Item
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
          <input
            type="text"
            placeholder="Food item name (e.g. Apple & Peanut Butter)"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            className="sm:col-span-5 bg-dark-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-purple"
          />
          <input
            type="number"
            placeholder="Calories"
            value={foodCalories}
            onChange={(e) => setFoodCalories(e.target.value)}
            className="sm:col-span-3 bg-dark-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-purple"
          />
          <select
            value={mealCategory}
            onChange={(e) => setMealCategory(e.target.value)}
            className="sm:col-span-2 bg-dark-900 border border-white/10 rounded-lg px-2 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-purple"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-purple hover:bg-purple-600 text-white text-xs font-bold transition-colors shadow-md"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </form>

      {/* Logged Food Entries List */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Logged Items ({items.length})</span>
          <span>Synced with Remaining Count</span>
        </div>
        <div className="max-h-44 overflow-y-auto space-y-1.5 pr-1">
          {items.length === 0 ? (
            <div className="text-center py-6 text-xs text-slate-500 italic border border-dashed border-white/10 rounded-lg">
              No food items logged yet today. Add items above to recalculate.
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-dark-900/80 border border-white/5 text-xs hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/10 text-slate-300">
                    {item.meal}
                  </span>
                  <span className="font-medium text-white">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-amber-300">{item.calories} kcal</span>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
