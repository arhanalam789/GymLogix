'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function WorkoutReminder() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    workout: '',
    date: '',
    time: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getGoogleCalLink = () => {
    if (!form.date || !form.time) return '#';

    const start = new Date(`${form.date}T${form.time}`);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // 1-hour duration

    const format = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    return `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
      form.workout || 'Workout Reminder'
    )}&dates=${format(start)}/${format(end)}&details=${encodeURIComponent(
      `Don’t forget your workout today: ${form.workout} 💪`
    )}&location=Home`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send('service_j9uj8pb', 'template_ir87sof', form, 'Se6t7n9SGfwCxzylB')
      .then(() => {
        setStatus('Reminder sent! Check your email 📩');
        const calLink = getGoogleCalLink();
        window.open(calLink, '_blank'); // Open Google Calendar in new tab
        setForm({ name: '', email: '', workout: '', date: '', time: '' });
      })
      .catch(() => setStatus('Something went wrong. Try again.'));
  };

  return (
    <section className="bg-black text-white py-12 px-6 md:px-20">
      <h2 className="text-2xl font-bold mb-6">Workout Reminder</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-[#1a1a1a] p-6 rounded-xl">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 rounded bg-black text-white border border-gray-600"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 rounded bg-black text-white border border-gray-600"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="workout"
          placeholder="Workout Title (e.g. Chest Day)"
          className="w-full p-2 rounded bg-black text-white border border-gray-600"
          value={form.workout}
          onChange={handleChange}
          required
        />
        <div className="flex gap-4">
          <input
            type="date"
            name="date"
            className="w-1/2 p-2 rounded bg-black text-white border border-gray-600"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            className="w-1/2 p-2 rounded bg-black text-white border border-gray-600"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition"
        >
          Set Reminder
        </button>

        {status && <p className="mt-2 text-green-400">{status}</p>}
      </form>
    </section>
  );
}
