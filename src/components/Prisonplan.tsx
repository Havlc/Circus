export function Prisonplan({ prisonplan }: string) {
  return (
    <img
      src={
        prisonplan
          ? prisonplan
          : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Fremantle_Prison_map.svg/303px-Fremantle_Prison_map.svg.png"
      }
      width="400vh"
    />
  );
}
