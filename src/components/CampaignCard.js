import React from 'react';
import './CampaignCard.css';

const CampaignCard = ({ campaign }) => {
  const { brandName, payout, progress, totalSlots, description, img } = campaign;
  const progressPercentage = (progress / totalSlots) * 100;

  return (
    <div className="campaign-card">
      <img src={img} alt={brandName} className="campaign-image" />
      <div className="campaign-details">
        <h2>{brandName}</h2>
        <p className="payout">{payout}</p>
        <p className="description">{description}</p>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>

        <p className="status">{progress}/{totalSlots} slots filled</p>
      </div>
    </div>
  );
};

export default CampaignCard;
