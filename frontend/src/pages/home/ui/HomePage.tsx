import React from 'react';
import { AppLayout } from '../../../widgets/layout/ui/AppLayout';
import { ProductCard } from '../../../features/market/ui/ProductCard';

// Mock events
const MOCK_EVENTS = [
  { id: '1', name: 'KIMES 2026 국제의료기기 전시회', brand: '한국의료기기산업협회', price: 0, imageUrl: '' },
  { id: '2', name: '제34회 대한레이저피부모발학회 정기학술대회', brand: '대한레이저피부모발학회', price: 50000, originalPrice: 70000, discountRate: 28, imageUrl: '' },
  { id: '3', name: 'WAYN-Ai 디지털 헬스케어 혁신 세미나', brand: 'WAYN-Ai', price: 100000, originalPrice: 150000, discountRate: 33, imageUrl: '' },
  { id: '4', name: '개원의를 위한 필수 의료법률 세미나', brand: '메디컬 로펌', price: 30000, imageUrl: '', isSoldOut: true },
  { id: '5', name: '2026 춘계 대한안과학회 정기총회', brand: '대한안과학회', price: 120000, imageUrl: '' },
];

const CATEGORIES = [
  '전체', '의료기기 전시회', '학술대회 (평점부여)', '개원의 세미나', '간호/스태프 연수', '치과/구강', '피부미용 학회'
];

export const HomePage: React.FC = () => {
  return (
    <AppLayout>
      {/* Categories (Horizontal) */}
      <section className="bg-white border-b border-[var(--color-border)] mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat, idx) => (
              <button 
                key={cat}
                className={`px-5 py-2.5 text-sm rounded-full border transition-all ${
                  idx === 0 
                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] font-medium shadow-sm' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Banner Area */}
      <section className="bg-gray-100 h-[300px] flex items-center mb-8 relative group overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full z-10">
          <div className="bg-white/80 backdrop-blur-xs p-8 rounded-2xl max-w-lg border border-white/40 shadow-xl">
            <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full mb-4">
              이달의 추천 학회
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              의료인의 평생 교육, <br/>
              품격을 높이는 맞춤 <span className="text-[var(--color-secondary)]">세미나</span>
            </h1>
            <p className="text-gray-600 mb-6">다양한 프리미엄 학술 행사를 메디이벤트올에서 빠르고 쉽게 신청하세요.</p>
          </div>
        </div>
        {/* Placeholder Background Abstract */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary-light)]/20 to-transparent pointer-events-none" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow mb-20 block">
        {/* Product Grid Area */}
        <section className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">이달의 주요 세미나 목록</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="font-semibold text-[var(--color-text-main)]">인기순</span>
              <span>|</span>
              <span className="hover:text-[var(--color-primary)] cursor-pointer">최신순</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {MOCK_EVENTS.map(event => (
              <ProductCard key={event.id} product={event} />
            ))}
            {MOCK_EVENTS.map(event => (
              <ProductCard key={`${event.id}-dup`} product={{...event, id: `${event.id}-dup`}} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};
