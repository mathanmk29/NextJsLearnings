import Greeting from "@/components/Greeetings";

export default function HomePage() {
  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Home Page</h1>
        <div className="space-y-4">
          <Greeting name="John" />
          <Greeting name="Jane" />
        </div>
      </div>
    </div>
  );
}
