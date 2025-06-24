import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Автоматизация продаж",
      description: "Полный цикл от лида до закрытия сделки",
      features: [
        "Скоринг клиентов",
        "Автоназначение задач",
        "Контроль воронки",
      ],
      price: "от 5,000 ₽/мес",
      popular: false,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "ИИ-аналитика Pro",
      description: "Предиктивная аналитика и машинное обучение",
      features: [
        "Прогноз сделок",
        "Анализ рынка",
        "Рекомендации ИИ",
        "Автоотчеты",
      ],
      price: "от 12,000 ₽/мес",
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Корпоративное решение",
      description: "Для крупных агентств с индивидуальными потребностями",
      features: [
        "Безлимитные пользователи",
        "API интеграции",
        "Персональный менеджер",
        "SLA 99.9%",
      ],
      price: "по запросу",
      popular: false,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Дополнительные
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              услуги
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите пакет, который идеально подходит для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 ${service.popular ? "scale-105 ring-2 ring-purple-500" : ""}`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                  Популярный
                </Badge>
              )}

              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon name="Settings" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {service.price}
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-400 mr-3 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl`}
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
