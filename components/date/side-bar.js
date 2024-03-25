import React from 'react';
import Link from 'next/link';

function SideBar({ tabs }) {
  return (
    <>
      <div role="tablist" className="tabs tabs-bordered">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            href={tab.path} // 使用 href 屬性指定導頁的路徑
            role="tab"
            className={`tab ${tab.active ? 'tab-active' : ''}`}
          >
            {tab.title}
          </Link>
        ))}
      </div>
    </>
  );
}

export default SideBar;
