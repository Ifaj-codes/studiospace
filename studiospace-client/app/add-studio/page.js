"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddStudio() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    
    const newStudio = {
      title: form.title.value,
      category: form.category.value,
      price: form.price.value,
      location: form.location.value,
      image: form.image.value,
      description: form.description.value
    };

    try {
      const response = await fetch('http://localhost:5000/api/studios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudio)
      });
      const data = await response.json();

      if (data.insertedId) {
        toast.success("Mama studio add hoise!");
        form.reset();
        router.push('/');
      } else {
        toast.error("Database e data save hoyni!");
      }
    } catch (error) {
      console.error("Error details:", error);
      toast.error("Kisu ekta jhamela hoise backend e!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded text-black">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Studio Space</h2>
      <form onSubmit={handleAdd} className="space-y-4">
        <div>
          <label className="block font-bold mb-1">Studio Title</label>
          <input type="text" name="title" required className="w-full border p-2 rounded" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-bold mb-1">Category</label>
            <select name="category" className="w-full border p-2 rounded">
              <option value="Photo Studio">Photo Studio</option>
              <option value="Film Stage">Film Stage</option>
              <option value="Podcast Lounge">Podcast Lounge</option>
              <option value="Music Suite">Music Suite</option>
            </select>
          </div>
          <div>
             <label className="block font-bold mb-1">Hourly Rate ($)</label>
             <input type="number" name="price" required className="w-full border p-2 rounded" />
          </div>
        </div>
        <div>
           <label className="block font-bold mb-1">Location</label>
           <input type="text" name="location" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-bold mb-1">Image URL</label>
          <input type="url" name="image" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-bold mb-1">Description</label>
          <textarea name="description" required className="w-full border p-2 rounded h-24"></textarea>
        </div>
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition">
          {loading ? "Saving..." : "Add Studio"}
        </button>
      </form>
    </div>
  );
}