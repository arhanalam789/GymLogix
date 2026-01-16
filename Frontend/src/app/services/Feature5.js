"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkoutReminder() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    workout: '',
    date: '',
    time: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getGoogleCalLink = () => {
    if (!form.date || !form.time) return '#';

    const start = new Date(`${form.date}T${form.time}`);
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    const format = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      form.workout || 'Workout Reminder'
    )}&dates=${format(start)}/${format(end)}&details=${encodeURIComponent(
      `Don’t forget your workout today: ${form.workout} 💪`
    )}&location=Home`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs
      .send('service_j9uj8pb', 'template_ir87sof', form, 'Se6t7n9SGfwCxzylB')
      .then(() => {
        setStatus('success');
        const calLink = getGoogleCalLink();
        window.open(calLink, '_blank');
        setForm({ name: '', email: '', workout: '', date: '', time: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setStatus('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bg-black text-white px-6 py-12 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
              Never Miss a <span className="text-[#FF4F5A]">Session</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-lg leading-relaxed">
              Discipline is the bridge between goals and accomplishment. Set high-precision reminders and sync your training schedule with your digital life.
            </p>

            <div className="space-y-6">
              {[
                { title: "Email Notifications", desc: "Instant reminders delivered to your inbox." },
                { title: "Calendar Sync", desc: "One-click integration with Google Calendar." },
                { title: "Smart Scheduling", desc: "Select specific dates and times for your peak performance." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#FF4F5A]/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#FF4F5A]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-widest">{item.title}</h4>
                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all placeholder:text-neutral-700"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all placeholder:text-neutral-700"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Workout Focus</label>
                <input
                  type="text"
                  name="workout"
                  placeholder="e.g. Back & Biceps Intensive"
                  className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all placeholder:text-neutral-700"
                  value={form.workout}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all [color-scheme:dark]"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Time</label>
                  <input
                    type="time"
                    name="time"
                    className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all [color-scheme:dark]"
                    value={form.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-[#FF4F5A] hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Set Performance Reminder
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center text-sm font-medium"
                  >
                    🔥 Reminder Scheduled & Calendar Synced!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center text-sm font-medium"
                  >
                    ❌ Connection failed. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF4F5A]/10 blur-3xl rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
