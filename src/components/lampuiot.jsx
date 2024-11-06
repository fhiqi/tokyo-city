// import backgroundImage from "../assets/background-light.svg";

const HomePage = () => {
  return (
    <div className="bg-cover bg-center h-screen bg-white flex flex-col md:flex-row">
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 space-y-4 md:w-1/2">
        <div className="text-black text-lg font-figtree">
          Keamanan publik Tokyo didukung oleh jaringan luas kamera CCTV
        </div>
        <div className="text-black text-lg font-figtree">
          Kamera CCTV yang ditempatkan secara strategis untuk memastikan
          keselamatan, memantau area perkotaan, dan mencegah kejahatan, semua
          sambil mempertahankan keseimbangan antara keamanan dan privasi.
        </div>
      </div>
      <div className="absolute right-1/2 top-1/4 translate-x-3/4 md:w-1/2">
        <img
          src="src/assets/lampu.svg"
          alt="Keamanan Publik di Tokyo"
          className="object-cover  min-w-40"
        />
      </div>
    </div>
  );
};

export default HomePage;
