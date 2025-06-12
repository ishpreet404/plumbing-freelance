import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { LogOutIcon, SaveIcon, EditIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

export const AdminDashboard = (): JSX.Element => {
  const { content, updateContent, isAdmin, setIsAdmin } = useContent();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("hero");
  const [editingService, setEditingService] = useState<number | null>(null);

  if (!isAdmin) {
    navigate("/admin/login");
    return <div>Redirecting...</div>;
  }

  const handleLogout = () => {
    setIsAdmin(false);
    navigate("/");
  };

  const handleSave = (section: keyof typeof content, data: any) => {
    updateContent(section, data);
    alert("Content updated successfully!");
  };

  const addService = () => {
    const newService = {
      name: "New Service",
      description: "Service description",
      price: "Starting at $99"
    };
    const updatedServices = [...content.services.serviceList, newService];
    updateContent("services", { serviceList: updatedServices });
  };

  const removeService = (index: number) => {
    const updatedServices = content.services.serviceList.filter((_, i) => i !== index);
    updateContent("services", { serviceList: updatedServices });
  };

  const updateService = (index: number, field: string, value: string) => {
    const updatedServices = content.services.serviceList.map((service, i) => 
      i === index ? { ...service, [field]: value } : service
    );
    updateContent("services", { serviceList: updatedServices });
  };

  const tabs = [
    { id: "hero", label: "Hero Section" },
    { id: "contact", label: "Contact Info" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "emergency", label: "Emergency" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline" className="flex items-center">
            <LogOutIcon className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-[#2585b8] text-[#2585b8]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Hero Section */}
            {activeTab === "hero" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold flex items-center">
                  <EditIcon className="w-5 h-5 mr-2" />
                  Edit Hero Section
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hero Title
                    </label>
                    <textarea
                      value={content.hero.title}
                      onChange={(e) => handleSave("hero", { title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hero Subtitle
                    </label>
                    <input
                      type="text"
                      value={content.hero.subtitle}
                      onChange={(e) => handleSave("hero", { subtitle: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={content.hero.buttonText}
                      onChange={(e) => handleSave("hero", { buttonText: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Contact Info */}
            {activeTab === "contact" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold flex items-center">
                  <EditIcon className="w-5 h-5 mr-2" />
                  Edit Contact Information
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={content.contact.phone}
                      onChange={(e) => handleSave("contact", { phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Top Bar Text
                    </label>
                    <input
                      type="text"
                      value={content.contact.topBarText}
                      onChange={(e) => handleSave("contact", { topBarText: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* About Section */}
            {activeTab === "about" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold flex items-center">
                  <EditIcon className="w-5 h-5 mr-2" />
                  Edit About Section
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      About Title
                    </label>
                    <input
                      type="text"
                      value={content.about.title}
                      onChange={(e) => handleSave("about", { title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={content.about.description}
                      onChange={(e) => handleSave("about", { description: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Features (one per line)
                    </label>
                    <textarea
                      value={content.about.features.join('\n')}
                      onChange={(e) => handleSave("about", { features: e.target.value.split('\n').filter(f => f.trim()) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                      rows={6}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Services Section */}
            {activeTab === "services" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold flex items-center">
                    <EditIcon className="w-5 h-5 mr-2" />
                    Edit Services
                  </h2>
                  <Button onClick={addService} className="bg-[#2585b8] hover:bg-[#1e6b96] text-white">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Add Service
                  </Button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services Title
                  </label>
                  <input
                    type="text"
                    value={content.services.title}
                    onChange={(e) => handleSave("services", { title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                  />
                </div>

                <div className="space-y-4">
                  {content.services.serviceList.map((service, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Service {index + 1}</h3>
                        <Button
                          onClick={() => removeService(index)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Service Name
                          </label>
                          <input
                            type="text"
                            value={service.name}
                            onChange={(e) => updateService(index, "name", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                          </label>
                          <input
                            type="text"
                            value={service.description}
                            onChange={(e) => updateService(index, "description", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price
                          </label>
                          <input
                            type="text"
                            value={service.price}
                            onChange={(e) => updateService(index, "price", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Emergency Section */}
            {activeTab === "emergency" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold flex items-center">
                  <EditIcon className="w-5 h-5 mr-2" />
                  Edit Emergency Section
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Title
                    </label>
                    <input
                      type="text"
                      value={content.emergency.title}
                      onChange={(e) => handleSave("emergency", { title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={content.emergency.description}
                      onChange={(e) => handleSave("emergency", { description: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Availability Text
                    </label>
                    <input
                      type="text"
                      value={content.emergency.availabilityText}
                      onChange={(e) => handleSave("emergency", { availabilityText: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};