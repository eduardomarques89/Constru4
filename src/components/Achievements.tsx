import React from 'react';
import { Trophy, Home, Users2, MapPin } from 'lucide-react';

const achievements = [
  {
    number: "15+",
    text: "Anos de experiência",
    icon: <Trophy className="h-8 w-8 text-secondary" />,
  },
  {
    number: "500+",
    text: "Projetos entregues",
    icon: <Home className="h-8 w-8 text-secondary" />,
  },
  {
    number: "10.000+",
    text: "Clientes satisfeitos",
    icon: <Users2 className="h-8 w-8 text-secondary" />,
  },
  {
    number: "50+",
    text: "Cidades atendidas",
    icon: <MapPin className="h-8 w-8 text-secondary" />,
  },
];

export const Achievements = () => {
  return (
    <section className="py-14 md:py-36 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{achievement.number}</h3>
              <p className="text-white">{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};