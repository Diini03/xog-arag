import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Industries = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Industry One‑Pagers</h1>
        <p className="mt-3 text-gray-700">Choose an industry one‑pager tailored to your prospects. Each includes segment-specific challenges, compliant workflows, metrics, and pricing comparison.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <Link to="/one-pagers/healthcare" className="rounded-lg border border-gray-200 p-6 hover:bg-orange-50 transition">Healthcare</Link>
          <Link to="/one-pagers/financial-services" className="rounded-lg border border-gray-200 p-6 hover:bg-orange-50 transition">Financial Services</Link>
          <Link to="/one-pagers/staffing-recruiting" className="rounded-lg border border-gray-200 p-6 hover:bg-orange-50 transition">Staffing & Recruiting</Link>
          <Link to="/one-pagers/software-consultancies" className="rounded-lg border border-gray-200 p-6 hover:bg-orange-50 transition">Software Consultancies</Link>
          <Link to="/one-pagers/saas" className="rounded-lg border border-gray-200 p-6 hover:bg-orange-50 transition">SaaS</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
