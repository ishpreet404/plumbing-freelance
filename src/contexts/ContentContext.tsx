import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContentData {
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  contact: {
    phone: string;
    topBarText: string;
  };
  about: {
    title: string;
    description: string;
    features: string[];
  };
  services: {
    title: string;
    serviceList: Array<{
      name: string;
      description: string;
      price: string;
    }>;
  };
  emergency: {
    title: string;
    description: string;
    availabilityText: string;
  };
}

interface ContentContextType {
  content: ContentData;
  updateContent: (section: keyof ContentData, data: any) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}

const defaultContent: ContentData = {
  hero: {
    title: "Reliable Plumbing Services\nIn Toronto, Canada",
    subtitle: "Fast, Affordable & 24/7 Emergency Support",
    buttonText: "Request Service Now"
  },
  contact: {
    phone: "+1 (604) 805-2105",
    topBarText: "Fast, Affordable & 24/7 Emergency Support"
  },
  about: {
    title: "About Our Plumbing Services",
    description: "We are Toronto's most trusted plumbing service provider with over 15 years of experience. Our certified plumbers are available 24/7 to handle all your plumbing needs.",
    features: [
      "Licensed & Insured Plumbers",
      "24/7 Emergency Service",
      "Upfront Pricing",
      "100% Satisfaction Guarantee",
      "Latest Equipment & Technology"
    ]
  },
  services: {
    title: "Our Plumbing Services",
    serviceList: [
      {
        name: "Emergency Plumbing",
        description: "24/7 emergency plumbing services for urgent repairs",
        price: "Starting at $99"
      },
      {
        name: "Drain Cleaning",
        description: "Professional drain cleaning and unclogging services",
        price: "Starting at $149"
      },
      {
        name: "Water Heater Repair",
        description: "Water heater installation, repair, and maintenance",
        price: "Starting at $199"
      },
      {
        name: "Pipe Repair",
        description: "Pipe repair, replacement, and leak detection",
        price: "Starting at $129"
      }
    ]
  },
  emergency: {
    title: "24/7 Emergency Plumbing Services",
    description: "Plumbing emergencies don't wait for business hours. Our emergency plumbing team is available 24/7, 365 days a year to handle your urgent plumbing needs.",
    availabilityText: "Available 24/7 - Call Now!"
  }
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ContentData>(defaultContent);
  const [isAdmin, setIsAdmin] = useState(false);

  const updateContent = (section: keyof ContentData, data: any) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, isAdmin, setIsAdmin }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};