import type { CastMember } from "@/types/drama";

export default function CastList({ cast }: { cast?: CastMember[] }) {
  if (!cast || cast.length === 0) return null;

  return (
    <section aria-labelledby="cast-heading" className="mt-8">
      <h2 id="cast-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-3">
        <span className="w-1 h-6 rounded-full bg-violet-500 block" aria-hidden="true" />
        Cast
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cast.map((member) => (
          <div
            key={member.name}
            className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full overflow-hidden bg-slate-700 mb-2 flex items-center justify-center">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-slate-400 text-lg font-bold">
                  {member.name.charAt(0)}
                </span>
              )}
            </div>
            <p className="text-white font-bold text-sm">{member.name}</p>
            <p className="text-slate-500 text-xs">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
