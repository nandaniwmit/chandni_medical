import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import medicineData from '../data/medicineStock.json';
import { Medicine } from '../types';
import { Search, Info, ShoppingCart, RefreshCw, AlertTriangle, CheckCircle, HelpCircle, XCircle } from 'lucide-react';

export const MedicineStockChecker: React.FC = () => {
  const { openOrderModal } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  
  // Simulated stock list loaded from imported JSON file
  const inventoryList = medicineData as Medicine[];

  // Real-time search and filter execution
  const filteredMedicines = useMemo(() => {
    return inventoryList.filter(med => {
      const matchesSearch = 
        med.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = 
        statusFilter === 'All' || 
        med.status === statusFilter;
        
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter, inventoryList]);

  const handleClear = () => {
    setSearchTerm('');
    setStatusFilter('All');
  };

  return (
    <div id="stock-checker" className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-sm overflow-hidden transition-colors duration-200">
      
      {/* Header Banner - Clean Minimalist Style */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-[#0A8F6A]" /> Real-time Medicine Stock Checker
          </h3>
          <span className="inline-flex self-start sm:self-center px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-400 text-[10px] rounded-full uppercase tracking-wider font-extrabold border border-emerald-100/60">Live Status</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
          Search our active Gaya store shelf inventory instantly. If a required item is out of stock, click WhatsApp Inquiry to request urgent procurement (12-24 hrs).
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Search Controls */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by Medicine Name, Active Ingredient, or Brand (e.g. Paracetamol, Cipla, Calpol)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 font-medium transition-all"
            />
          </div>
          
          <div className="flex gap-2">
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="px-4 py-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 cursor-pointer"
            >
              <option value="All">All Inventory Statuses</option>
              <option value="Available">Available Only</option>
              <option value="Limited Stock">Limited Stock Only</option>
              <option value="Out of Stock">Out of Stock Only</option>
            </select>

            {(searchTerm || statusFilter !== 'All') && (
              <button 
                onClick={handleClear}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Note about integration */}
        <div className="flex gap-2.5 p-3.5 bg-sky-50/50 dark:bg-sky-950/10 border border-sky-100 dark:border-sky-900/30 rounded-xl text-xs text-sky-800 dark:text-sky-300">
          <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
          <p>
            <strong>Developer Note:</strong> This inventory module fetches from <code>medicineStock.json</code>. Future API connection is straightforward—simply replace the static array in <code>useEffect</code> with a fetch call to your back-end route (e.g. <code>/api/medicines</code>).
          </p>
        </div>

        {/* Results Grid / Table */}
        <div className="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 font-semibold text-xs uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                <th className="py-3 px-4">Medicine Name</th>
                <th className="py-3 px-4">Brand / Manufacturer</th>
                <th className="py-3 px-4 text-center">MRP (INR)</th>
                <th className="py-3 px-4 text-center">Expiry</th>
                <th className="py-3 px-4 text-center">Stock Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {filteredMedicines.length > 0 ? (
                filteredMedicines.map((med) => {
                  const isAvailable = med.status === 'Available';
                  const isLimited = med.status === 'Limited Stock';
                  const isOutOfStock = med.status === 'Out of Stock';

                  return (
                    <tr 
                      key={med.id} 
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/20 transition-colors duration-100"
                    >
                      <td className="py-4 px-4 font-bold text-slate-800 dark:text-slate-200">
                        {med.medicineName}
                      </td>
                      <td className="py-4 px-4 text-slate-500 dark:text-slate-400 font-medium">
                        {med.brand}
                      </td>
                      <td className="py-4 px-4 text-center font-semibold text-slate-700 dark:text-slate-300">
                        ₹{med.mrp.toFixed(2)}
                      </td>
                      <td className="py-4 px-4 text-center text-slate-500 dark:text-slate-400 text-xs font-mono">
                        {med.expiry}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold leading-none ${
                          isAvailable 
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 text-[#0A8F6A] dark:text-emerald-400' 
                            : isLimited 
                              ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400' 
                              : 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400'
                        }`}>
                          {isAvailable && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                          {isLimited && <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />}
                          {isOutOfStock && <XCircle className="w-3.5 h-3.5 text-rose-500" />}
                          {med.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        {isOutOfStock ? (
                          <button
                            onClick={() => openOrderModal(`${med.medicineName} (Procure Request)`)}
                            className="px-3 py-1.5 text-xs font-bold rounded-lg border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all duration-150"
                          >
                            Procure 24h
                          </button>
                        ) : (
                          <button
                            onClick={() => openOrderModal(`${med.medicineName} - 1 Strip`)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 rounded-lg shadow-sm hover:shadow transition-all duration-150"
                          >
                            <ShoppingCart className="w-3 h-3" />
                            Order Now
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 px-4 text-center text-slate-400 dark:text-slate-500">
                    <HelpCircle className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700 mb-2.5" />
                    <p className="font-bold text-base text-slate-600 dark:text-slate-400">No matching medicines found</p>
                    <p className="text-xs mt-1 max-w-md mx-auto">
                      Don't worry! We procure rare pharmaceutical brands daily. Click below to inquire directly via WhatsApp.
                    </p>
                    <button
                      onClick={() => openOrderModal(searchTerm)}
                      className="mt-4 px-4.5 py-2 bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 text-white font-bold text-xs rounded-lg transition-all"
                    >
                      Inquire on WhatsApp
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Statistics info banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Showing <strong className="text-slate-800 dark:text-slate-200">{filteredMedicines.length}</strong> of <strong className="text-slate-800 dark:text-slate-200">{inventoryList.length}</strong> tracked pharmacy items.
          </div>
          <div className="flex gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#0A8F6A]"></span> Available</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Limited</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Out of Stock</span>
          </div>
        </div>
      </div>
    </div>
  );
};
