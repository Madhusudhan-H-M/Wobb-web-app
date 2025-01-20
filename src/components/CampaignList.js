import React from 'react';
import CampaignCard from './CampaignCard';
import './CampaignList.css';

// Corrected image paths (going up one level to the 'Images' folder)
import adidasLogo from 'G:/Wobb web app/wobb-web-app/src/components/Images/adidas-logo.png'; // Adjusted path
import pumaLogo from 'G:/Wobb web app/wobb-web-app/src/components/Images/puma.jpg'; // Adjusted path
import reebokLogo from 'G:/Wobb web app/wobb-web-app/src/components/Images/Reebok-logo.png'; // Adjusted path

// Sample campaign data
const campaigns = [
  {
    brandName: 'Adidas',
    payout: 'Fixed Pay: Rs.500',
    progress: 5,
    totalSlots: 10,
    description: 'Adidas is a leading global sportswear brand, known for its innovative and sustainable products. Join us to promote eco-conscious campaigns and be a part of the movement.',
    img: adidasLogo, // Use the imported image variable here
  },
  {
    brandName: 'Puma',
    payout: 'Barter: Free Products',
    progress: 3,
    totalSlots: 5,
    description: 'Puma is an international sportswear brand offering cutting-edge design and performance-driven technology. Collaborate with us to promote the latest in fashion and functionality.',
    img: pumaLogo, // Use the imported image variable here
  },
  {
    brandName: 'Reebok',
    payout: 'Refund: Rs.200',
    progress: 2,
    totalSlots: 8,
    description: 'Reebok is committed to promoting health and fitness through innovative products and community-focused campaigns. Be a part of our fitness-driven initiatives.',
    img: reebokLogo, // Use the imported image variable here
  }
];

const CampaignList = () => {
  return (
    <div className="campaign-list">
      {campaigns.map((campaign, index) => (
        <CampaignCard key={index} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignList;
