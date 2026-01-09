import Image from "next/image";

export default function Maintenance() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', width: '100%', height: 'auto' }}>
        <Image
          src="/images/wider-header-logo.svg"
          layout="responsive"
          width={100}
          height={50}
          alt="Wider Logo"
        />
      </div>
      <h1 className="titulo-xxl color-white" style={{ fontSize: '3rem', margin: '1rem 0' }}>Próximamente</h1>
    </div>
  );
}