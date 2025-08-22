import SectionCopyright from "../3-organisms/SectionCopyright";
import ContainerFooterMenuSmall from "../3-organisms/ContainerFooterMenuSmall";
import FooterLinkList from "../3-organisms/FooterLinkList";

const genreLinks = [
  { label: "Aksi", href: "#" },
  { label: "Anak-anak", href: "#" },
  { label: "Anime", href: "#" },
  { label: "Britania", href: "#" },
];
const genreLinks2 = [
  { label: "Drama", href: "#" },
  { label: "Fantasi Ilmiah & Fantasi", href: "#" },
  { label: "KDrama", href: "#" },
  { label: "Kejahatan", href: "#" },
];
const genreLinks3 = [
  { label: "Komedi", href: "#" },
  { label: "Perang", href: "#" },
  { label: "Petualangan", href: "#" },
  { label: "Romantis", href: "#" },
];
const genreLinks4 = [
  { label: "Sains & Alam", href: "#" },
  { label: "Thriller", href: "#" },
];
const helpLinks = [
  { label: "FAQ", href: "#" },
  { label: "Kontak Kami", href: "#" },
  { label: "Privasi", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-between w-full items-start px-5 pt-25 pb-10 lg:px-[80px] lg:py-25 bg-[#181A1C] text-white gap-[40px]">
      <SectionCopyright src="/img/logo/logo.png" alt="Logo">
        @2025 Chill All Rights Reserved.
      </SectionCopyright>

      {/* Footer Menu Big */}
      <div className="section-footer-menu hidden lg:flex flex-row justify-between items-center text-[16px] text-[#C1C2C4] gap-20">
        <div className="section-genre flex flex-col gap-4">
          <h3 className="font-bold text-[#ffffff]">Genre</h3>
          <div className="genre-list flex flex-row gap-4">
            <FooterLinkList links={genreLinks} />
            <FooterLinkList links={genreLinks2} />
            <FooterLinkList links={genreLinks3} />
            <FooterLinkList links={genreLinks4} />
          </div>
        </div>
        <div className="section-help flex flex-col gap-4 ">
          <h3 className="font-bold text-[#ffffff]">Bantuan</h3>
          <FooterLinkList links={helpLinks} />
        </div>
      </div>
      {/* Footer Menu Big End */}

      {/* Footer Menu Small */}
      <ContainerFooterMenuSmall />
    </footer>
  );
};

export default Footer;
