import type { CastMember } from "@/types/drama";

export default function CastList({ cast }: { cast?: CastMember[] }) {
  if (!cast || cast.length === 0) return null;

  return (
    <section aria-labelledby="cast-heading" className="mt-8">
      <h2 id="cast-heading" className="text-xl font-bold text-[var(--color-text)] mb-4 flex items-center gap-3">
        <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
        Cast
      </h2>
      <div className="space-y-3">
        {cast.map((member) => (
          <div
            key={member.name}
            className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl p-4 flex gap-4 items-start"
          >
            <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden bg-[var(--color-border)] flex items-center justify-center">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[var(--color-muted)] text-lg font-bold">
                  {member.name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <p className="text-[var(--color-text)] font-bold text-sm">{member.name}</p>
              <p className="text-[var(--color-muted)] text-xs mb-1">{member.role}</p>
              {member.bio && (
                <p className="text-[var(--color-text)] text-xs leading-relaxed">{member.bio}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
