import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Click Me"
        styles="hover:bg-red-500 lg:rounded-lg md:rounded-md sm:rounded-sm "
      />
    </div>
  );
};
export default Landing;
