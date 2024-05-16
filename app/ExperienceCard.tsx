
interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, period, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-600">{period}</p>
      <ul className="mt-4 list-disc list-inside text-gray-800">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
