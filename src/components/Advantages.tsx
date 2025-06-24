import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Brain",
      title: "ИИ-помощник",
      description:
        "Автоматический анализ клиентов, подбор объектов и прогнозирование сделок с точностью 95%",
    },
    {
      icon: "BarChart3",
      title: "Аналитика в реальном времени",
      description:
        "Полная визуализация воронки продаж, конверсии и эффективности каждого сотрудника",
    },
    {
      icon: "MessageSquare",
      title: "Мультиканальная связь",
      description:
        "WhatsApp, Telegram, звонки и email в едином интерфейсе с автоматическими ответами",
    },
    {
      icon: "Shield",
      title: "Безопасность данных",
      description:
        "Шифрование уровня банков, резервное копирование и соответствие GDPR",
    },
    {
      icon: "Smartphone",
      title: "Мобильное приложение",
      description:
        "Работайте из любой точки мира с полным функционалом на iOS и Android",
    },
    {
      icon: "Zap",
      title: "Интеграции",
      description:
        "Подключение к ЦИАН, Авито, банкам и государственным реестрам в один клик",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нашу
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              CRM
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Передовые технологии, которые превращают обычное агентство в лидера
            рынка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:shadow-purple-100 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon
                    name={advantage.icon}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
