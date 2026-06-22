export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 bg-white py-8 rounded-lg shadow-md border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Contact the Quartermaster</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rank & Name</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" placeholder="e.g. Capt. John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Service ID</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" placeholder="e.g. SRV-90812" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject / Inquiry</label>
            <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" rows={3} placeholder="Dietary restrictions, registration request, etc."></textarea>
          </div>
          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-md shadow focus:outline-none">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
