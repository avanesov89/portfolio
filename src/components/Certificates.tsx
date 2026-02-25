import { Certificate } from "@/types";

interface CertificatesProps {
  certificates: Certificate[];
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Сертификаты</h3>
      <div className="space-y-4">
        {certificates.map((item) => (
          <div key={item.id}>
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-sm text-[var(--foreground-muted)] mt-1">
              {item.organization} • {item.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
