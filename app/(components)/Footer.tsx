import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="border-t border-gray-300"></div>
      <div className="p-6 text-gray-700 text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="m-3">
            <strong>(주) 즉각즉각 대표:</strong> 최윤서 <strong>사업자번호:</strong> 111-11-1111
          </p>
          <p className="m-3">
            <strong>주소:</strong> 서울특별시 강남구 역삼동 826-21 미왕빌딩
          </p>
          <p className="m-3">
            <strong>전화:</strong> 010-8766-5604 <strong>고객문의:</strong> undeevy3@gmail.com
          </p>
          <div className="m-2 mt-4 flex flex-wrap gap-4 text-gray-600 text-xs">
            <button className="hover:text-gray-800 transition-colors">이용 약관</button>
            <button className="hover:text-gray-800 transition-colors">개인정보처리방침</button>
            <button className="hover:text-gray-800 transition-colors">운영정책</button>
            <button className="hover:text-gray-800 transition-colors">위치기반서비스 이용약관</button>
            <button className="hover:text-gray-800 transition-colors">이용자보호 비전과 계획</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
