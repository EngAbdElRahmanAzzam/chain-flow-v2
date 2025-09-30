import { useState } from 'react';
import PartnerListItem from '../components/atoms/PartnerListItem';
import PartnerDetailsPanel from '../components/organisms/PartnerDetailsPanel';
import { SearchIcon, FilterIcon } from '../../../assets/Icons/SVG';
import DashBtn from '../../../Shared/Components/Atoms/DashBtn';
import usePartners from '../utils/usePartnerData';

export default function PartnersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const {partners} = usePartners();

  const filteredPartners = partners.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'All' || p.type.includes(activeTab))
  );

  return (
    <div className="row">
      

      <div className="card col-12 col-lg-7">
        {selectedPartner && <PartnerDetailsPanel partner={selectedPartner} />}
      </div>
    </div>
  );
}
