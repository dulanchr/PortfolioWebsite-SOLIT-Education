import TeamCard from "./TeamCard";

function Teams({ teams }) {
  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>Meet Our Teachers</h2>
        </div>
        <div className="row">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
