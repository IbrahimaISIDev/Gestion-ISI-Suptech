import React from 'react';
import { Users, BookOpen, Clock, ChevronRight, Download } from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';

export default function ProfessorClasses() {
  const classes = [
    {
      id: 1,
      name: '2ème année Info',
      nbStudents: 35,
      delegue: 'Marie Laurent',
      courses: ['Mathématiques Avancées', 'Algorithmique', 'Base de données'],
      nextCourse: 'Demain - 8h00',
    },
    {
      id: 2,
      name: '3ème année Info',
      nbStudents: 28,
      delegue: 'Jean Dupont',
      courses: [
        'Intelligence Artificielle',
        'Développement Web',
        'Sécurité Informatique',
      ],
      nextCourse: "Aujourd'hui - 14h00",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mes Classes</h1>
            <p className="text-blue-100">Gestion et suivi des classes</p>
          </div>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition">
            <Download size={20} />
            Exporter les données
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {classes.map((classe) => (
          <Card key={classe.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {classe.name}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-500 mt-1">
                      <Users className="h-5 w-5" />
                      <span>{classe.nbStudents} étudiants</span>
                      <span className="mx-2">•</span>
                      <span>Délégué: {classe.delegue}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">
                        Prochain cours
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span>{classe.nextCourse}</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 flex-grow">
                      <h3 className="font-semibold text-blue-800 mb-2">
                        Cours enseignés
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        {classe.courses.map((course, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="text-blue-600 hover:text-blue-800">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <button className="p-3 text-center rounded-lg border border-blue-200 hover:bg-blue-50 transition">
                  Voir la liste
                </button>
                <button className="p-3 text-center rounded-lg border border-blue-200 hover:bg-blue-50 transition">
                  Gestion des absences
                </button>
                <button className="p-3 text-center rounded-lg border border-blue-200 hover:bg-blue-50 transition">
                  Suivi des notes
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
