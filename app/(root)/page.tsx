import { Button } from "@/components/ui/button";

export default function Homepage() {
  return (
    <main className="wrapper">
      <div className="grid grid-cols-[1.5fr,1fr]">
        <h1 className="h1">FIND BEAUTIFUL PLANTS ONLY AT POTZYN</h1>
        <div>
          <p className="body-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            commodi deserunt ipsum facere nemo, quod vitae odio dolor quia
            dignissimos at.
          </p>
          <Button>Get Startedf</Button>
        </div>
      </div>
    </main>
  );
}
