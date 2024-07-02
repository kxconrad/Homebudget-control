import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MonthBudget from './MonthBudget';
import General from './General';
import submenuData from '../../utils/data/settings/submenuData';
import NotFound from '../NotFound';

const SettingsPanel: React.FC = () => {
  const { settingsSubmenu } = useParams();

  useEffect(() => {
    console.log('settingsSection: ', settingsSubmenu);
  }, [settingsSubmenu]);

  const submenuPath = submenuData.find(data => settingsSubmenu === data.type);

  if (settingsSubmenu !== undefined && !submenuPath) {
    return <NotFound />;
  }

  return <>
    <div className="flex w-full gap-10">
      <div className="min-w-[250px] bg-slate-200 border border-gray-700 rounded px-3 py-3">
        {
          submenuData.map((item) => (
            <a href={item.url} key={item.id} className={
              (settingsSubmenu === undefined && item.id === 1) ||
              (settingsSubmenu && item.id !== 1) ? 'font-medium' : ''
            }>
              <h3>{item.label}</h3>
            </a>
          ))
        }
      </div>
      {!settingsSubmenu &&
        <MonthBudget />
      }
      {settingsSubmenu === 'general' &&
        <General />
      }
    </div>
  </>;
};

export default SettingsPanel;