import { useEffect, useState, useRef } from "react"
import { pengurusDetail } from "../../data"

const PopupWithPagination = ({ isOpen, onClose, divisiSelect }) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const timersRef = useRef([]);

  useEffect(()=>{
    if (isOpen) {
      setActiveKey(divisiSelect);
      setIndex(0);
      setMounted(true);
      setVisible(false);
      
      requestAnimationFrame( () => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else if (!isOpen) {
      setVisible(false);
    }
  }, [isOpen, divisiSelect]);
  
  const dataDivisi = activeKey ? pengurusDetail[activeKey] : null;
  const anggota = dataDivisi?.anggota ?? [];
  const total = anggota.length;
  const currentAnggota = total > 0 ? anggota[index] : null;

  useEffect(() => {
    if (total < 2) return;
    const preNext = new Image();
    preNext.src = anggota[(index + 1) % total]?.foto || "";
    const prePrev = new Image();
    prePrev.src = anggota[(index - 1 + total) % total]?.foto || "";
  }, [index, total, anggota]);
  
  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    return clearTimers;
  }, []);

  
  if (!mounted) return null;
  if (!dataDivisi) return <div>Data tidak ditemukan</div>;

  const fadeSwap = (getNextIndex) => {
    if (total <= 1) return;
    setIsTransitioning(true);
    timersRef.current.push(
      setTimeout(() => {
        setIndex((prev) => getNextIndex(prev));
      }, 150),
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300) 
    );
  };

  const handleNext = () => fadeSwap((prev) => (prev + 1) % total);
  const handlePrev = () => fadeSwap((prev) => (prev - 1 + total) % total);

  const handleOverlayTransitionEnd = e => {
  if (e.target === e.currentTarget && e.propertyName === 'opacity' && !visible) {
    setMounted(false);
    setActiveKey(null);
  }}


  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm duration-300 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
      onTransitionEnd={handleOverlayTransitionEnd}
      aria-hidden={!visible}
    >
      <div
        className="relative max-w-5xl mx-auto bg-secondary-dark border-5 border-primary shadow-2xl shadow-yellow-400/20 sm:p-6 lg:p-8 rounded-2xl flex flex-col lg:flex-row gap-6 lg:gap-10 max-h-[75vh] animate-in slide-in-from-bottom-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 text-white space-y-4 lg:space-y-6">
          <div className="flex items-center gap-4">
            <img
              src={dataDivisi.logoDivisi || "/placeholder.svg"}
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain animate-in spin-in-180 duration-700"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black capitalize text-primary">
              Divisi {activeKey}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-justify text-gray-300 leading-relaxed animate-in slide-in-from-left duration-700 delay-200">
            {dataDivisi.deskripsi}
          </p>

          <div className="space-y-3 animate-in slide-in-from-left duration-700 delay-300">
            {dataDivisi.bullet.map((text, i) => (
              <div
                key={i}
                className="bg-primary text-black px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <strong className="block text-sm sm:text-base">{text}</strong>
                <p className="text-xs sm:text-sm opacity-80 mt-1">{dataDivisi.bulletDesc[i]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center">

          {/* Member Photo */}
          <div
            key={index}
            className={`z-10 transition-all duration-300 p-8 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            <div className="group">
              <img
                loading="lazy"
                src={currentAnggota?.foto || "/placeholder.svg"}
                alt={currentAnggota?.nama}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary cursor-pointer text-black p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r bg-primary cursor-pointer text-black p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopupWithPagination
