export default function Introduction() {
  return (
    <div className="flex-1 lg:max-w-3xl">
      <h1 className="text-4xl font-bold text-[#1a1a24] mb-4">Introduction</h1>
      <p className="text-slate-600 mb-6 leading-relaxed text-[15px]">
        Welcome to the <strong>Kivotos Student Database API</strong>! This RESTful API provides comprehensive data about the world of Blue Archive. Whether you are building a wiki, a Discord bot, or a tactical simulator, you'll find everything you need right here.
      </p>

      <h3 className="text-2xl font-bold text-[#1a1a24] mb-4 mt-12 border-b border-slate-100 pb-2">Available Endpoints</h3>
      <p className="text-slate-600 mb-6 leading-relaxed text-[15px]">
        Our API is fully versioned (currently <code>v2</code>). Here is a quick overview of the available resources you can consume:
      </p>

      <div className="space-y-4">
        {/* Endpoint 1 */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-4">
          <span className="bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded text-[11px] uppercase tracking-wide mt-0.5">Get</span>
          <div>
            <code className="text-sm font-mono text-slate-800 font-bold block mb-1">/api/v2/students</code>
            <p className="text-[13px] text-slate-500">Retrieve a list of all enrolled students across Kivotos. Filterable by academy, roles, and more.</p>
          </div>
        </div>

        {/* Endpoint 2 */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-4">
          <span className="bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded text-[11px] uppercase tracking-wide mt-0.5">Get</span>
          <div>
            <code className="text-sm font-mono text-slate-800 font-bold block mb-1">/api/v2/students/{`{id}`}</code>
            <p className="text-[13px] text-slate-500">Retrieve detailed tactical and profile metadata for a specific student.</p>
          </div>
        </div>

        {/* Endpoint 3 */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-4">
          <span className="bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded text-[11px] uppercase tracking-wide mt-0.5">Get</span>
          <div>
            <code className="text-sm font-mono text-slate-800 font-bold block mb-1">/api/v2/academies</code>
            <p className="text-[13px] text-slate-500">Retrieve a list of all registered academies in Kivotos (e.g., Trinity, Gehenna, Millennium).</p>
          </div>
        </div>

        {/* Endpoint 4 */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-4">
          <span className="bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded text-[11px] uppercase tracking-wide mt-0.5">Get</span>
          <div>
            <code className="text-sm font-mono text-slate-800 font-bold block mb-1">/api/v2/clubs</code>
            <p className="text-[13px] text-slate-500">Retrieve information about student clubs (e.g., Foreclosure Task Force, Game Development Department).</p>
          </div>
        </div>

        {/* Endpoint 5 */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm flex items-start gap-4">
          <span className="bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded text-[11px] uppercase tracking-wide mt-0.5">Get</span>
          <div>
            <code className="text-sm font-mono text-emerald-800 font-bold block mb-1">/api/v2/raids</code>
            <p className="text-[13px] text-emerald-600">Retrieve information about Total Assault (Raid) bosses, including their stats, mechanics, and terrain requirements.</p>
          </div>
        </div>
      </div>

    </div>
  );
}