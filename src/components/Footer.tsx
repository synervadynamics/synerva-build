import { copy } from "@/data/copy";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 rounded-[2rem] border border-white/12 bg-gradient-to-br from-[#0b1522cc] via-[#0e1c2ccc] to-[#0a131fcc] p-6 text-white/72 shadow-[0_32px_120px_-76px_rgba(0,0,0,0.82)] backdrop-blur-2xl lg:p-8">
        <p className="role-body text-lg text-white">{copy.footer.schema.name}</p>
        <p className="role-body text-sm whitespace-pre-line">
          {copy.global.contact.address}
        </p>
        <p className="role-body text-sm">{copy.global.contact.phone}</p>
        <p className="role-body text-sm">{copy.global.contact.email}</p>
      </div>
      <p className="role-body mx-auto mt-4 max-w-6xl text-xs text-white/55">
        {copy.footer.legal}
      </p>
    </footer>
  );
};
