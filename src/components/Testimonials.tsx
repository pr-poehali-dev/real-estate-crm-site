import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Смирнова",
      role: 'Директор "Премиум Недвижимость"',
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "За 8 месяцев работы с CRM наши продажи выросли на 340%. Особенно впечатляет ИИ-помощник - он точно определяет горячих клиентов.",
      rating: 5,
    },
    {
      name: "Михаил Козлов",
      role: 'Основатель "Столичная недвижимость"',
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "Автоматизация высвободила 60% времени команды. Теперь мы фокусируемся на качестве сервиса, а рутину делает система.",
      rating: 5,
    },
    {
      name: "Елена Петрова",
      role: 'Коммерческий директор "Элит Групп"',
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content:
        "Лучшая инвестиция в развитие бизнеса! Аналитика помогает принимать правильные решения, а мобильное приложение - работать из любой точки.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Что говорят наши
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              клиенты
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Истории успеха от реальных агентств недвижимости
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-8">
                  <Icon
                    name="Quote"
                    size={32}
                    className="text-purple-300 mb-4"
                  />
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Shield" size={24} className="text-green-500" />
              <span className="text-gray-700 font-medium">
                Защищенные данные
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Award" size={24} className="text-blue-500" />
              <span className="text-gray-700 font-medium">Лучшая CRM 2024</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Users" size={24} className="text-purple-500" />
              <span className="text-gray-700 font-medium">
                15,000+ пользователей
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Clock" size={24} className="text-orange-500" />
              <span className="text-gray-700 font-medium">Поддержка 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
