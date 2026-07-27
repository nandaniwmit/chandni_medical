import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { BUSINESS_INFO } from '../utils/data';
import { X, Send, Phone, FileText, Clock, MapPin, User, Mail, Sparkles, Upload } from 'lucide-react';

export const WhatsAppOrderForm: React.FC = () => {
  const { isOrderModalOpen, closeOrderModal, prefilledMedicineName } = useApp();

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineName: '',
    hasPrescription: 'Yes',
    prescriptionFile: null as File | null,
    message: '',
    deliveryTime: 'As soon as possible'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Populate prefilled medicine name if passed from context
  useEffect(() => {
    if (prefilledMedicineName) {
      setFormData(prev => ({ ...prev, medicineName: prefilledMedicineName }));
    }
  }, [prefilledMedicineName, isOrderModalOpen]);

  if (!isOrderModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, prescriptionFile: e.target.files![0] }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?([0-9]{2})?[-. ]?([0-9]{10})$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.address.trim()) newErrors.address = 'Delivery address is required';
    if (!formData.medicineName.trim()) newErrors.medicineName = 'Please enter medicine details';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build formatted message
    const formattedMessage = `Hello ${BUSINESS_INFO.name} Team,

🔔 *NEW MEDICINE ORDER VIA WEBSITE*
----------------------------------------
👤 *Customer Name:* ${formData.customerName.trim()}
📱 *Phone:* ${formData.phone.trim()}
📧 *Email:* ${formData.email.trim() || 'Not Provided'}
📍 *Delivery Address:* ${formData.address.trim()}

💊 *Medicines Required:*
${formData.medicineName.trim()}

📝 *Prescription Available:* ${formData.hasPrescription} ${formData.prescriptionFile ? `(Uploaded: ${formData.prescriptionFile.name})` : ''}
⏰ *Preferred Delivery Time:* ${formData.deliveryTime}
💬 *Additional Notes:* ${formData.message.trim() || 'None'}
----------------------------------------
_Please review and confirm my order. Thank you!_`;

    // Encode URL parameters
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappFormatted}?text=${encodeURIComponent(formattedMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Close the modal
    closeOrderModal();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={closeOrderModal}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col scale-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 bg-[#0A8F6A] text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">WhatsApp Medicine Order</h3>
              <p className="text-xs text-white/90 font-medium">Fast validation & contactless door delivery in Gaya</p>
            </div>
          </div>
          <button 
            onClick={closeOrderModal}
            className="p-1.5 bg-black/20 hover:bg-black/35 rounded-full transition-colors duration-150"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          
          {/* Note Info */}
          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg text-sm text-amber-800 dark:text-amber-300">
            <p className="font-semibold flex items-center gap-1.5 mb-1">
              <Sparkles className="w-4 h-4 text-amber-600" /> Prescription Notice:
            </p>
            For regulated medications (Schedule H / antibiotics / diabetes), a valid doctor's prescription must be uploaded or shown upon delivery.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#0A8F6A]" /> Full Name *
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border ${errors.customerName ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20`}
              />
              {errors.customerName && <p className="mt-1 text-xs text-red-500 font-medium">{errors.customerName}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#0A8F6A]" /> WhatsApp Mobile *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border ${errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#0A8F6A]" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com (Optional)"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20"
              />
            </div>

            {/* Delivery Time preference */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0A8F6A]" /> Preferred Delivery Time
              </label>
              <select
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20"
              >
                <option value="As soon as possible">As soon as possible (Urgent)</option>
                <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                <option value="Night (8 PM - 10 PM)">Night (8 PM - 10 PM)</option>
              </select>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#0A8F6A]" /> Delivery Address in Gaya *
            </label>
            <textarea
              name="address"
              rows={2}
              value={formData.address}
              onChange={handleChange}
              placeholder="Provide complete house address (Landmarks: e.g. Near Gaya Station, GB Road, AP Colony)"
              className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border ${errors.address ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20`}
            />
            {errors.address && <p className="mt-1 text-xs text-red-500 font-medium">{errors.address}</p>}
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#0A8F6A]" /> Required Medicines & Quantity *
            </label>
            <textarea
              name="medicineName"
              rows={3}
              value={formData.medicineName}
              onChange={handleChange}
              placeholder="Example: &#10;1. Calpol 650mg - 2 Strips&#10;2. Volini Gel 50g - 1 Tube&#10;3. Becosules Capsules - 3 Strips"
              className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border ${errors.medicineName ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20`}
            />
            {errors.medicineName && <p className="mt-1 text-xs text-red-500 font-medium">{errors.medicineName}</p>}
          </div>

          {/* Prescription Upload and Select Toggle */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl space-y-4 border border-slate-150 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">Do you have a doctor's prescription?</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Required for prescription-only medicines.</span>
              </div>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer font-medium text-sm text-slate-700 dark:text-slate-300">
                  <input
                    type="radio"
                    name="hasPrescription"
                    value="Yes"
                    checked={formData.hasPrescription === 'Yes'}
                    onChange={handleChange}
                    className="accent-[#0A8F6A] w-4 h-4"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-sm text-slate-700 dark:text-slate-300">
                  <input
                    type="radio"
                    name="hasPrescription"
                    value="No"
                    checked={formData.hasPrescription === 'No'}
                    onChange={handleChange}
                    className="accent-[#0A8F6A] w-4 h-4"
                  />
                  No (OTC/General Goods only)
                </label>
              </div>
            </div>

            {formData.hasPrescription === 'Yes' && (
              <div className="pt-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Upload className="w-4 h-4 text-[#0A8F6A]" /> Select/Upload Prescription Photo
                </label>
                <div className="relative border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-[#0A8F6A] dark:hover:border-[#0A8F6A] transition-colors duration-150 rounded-lg p-4 text-center cursor-pointer">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {formData.prescriptionFile ? (
                    <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5">
                      <FileText className="w-5 h-5 text-[#0A8F6A] animate-bounce" />
                      Selected: {formData.prescriptionFile.name} ({(formData.prescriptionFile.size / 1024 / 1024).toFixed(2)} MB)
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      <p className="font-semibold text-slate-700 dark:text-slate-300">Click to upload prescription</p>
                      <p className="text-xs text-slate-400">Formats: JPG, PNG, PDF up to 5MB</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Custom Message */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              Message / Special Notes
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific tablet brands, chemical substitutes, cold packs or special notes for delivery drivers."
              className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20"
            />
          </div>

          {/* Submit Action Block */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 px-6 py-3.5 bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 text-white font-bold rounded-xl shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Order via WhatsApp
            </button>
            <button
              type="button"
              onClick={() => {
                window.open(`tel:${BUSINESS_INFO.phone}`, '_self');
              }}
              className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-xl transition-colors duration-150 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#0A8F6A]" />
              Call Pharmacy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
