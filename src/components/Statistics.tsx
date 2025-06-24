import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Statistics = () => {
  const stats = [
    {
      value: "2.4M+",
      label: "Сделок закрыто",
      icon: "TrendingUp",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      value: "847",
      label: "Агентств партнеров",
      icon: "Building2",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      value: "15,000+",
      label: "Активных риелторов",
      icon: "Users",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      value: "₽450M",
      label: "Оборот в месяц",
      icon: "DollarSign",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      value: "99.7%",
      label: "Время работы",
      icon: "Shield",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      value: "4.9/5",
      label: "Рейтинг клиентов",
      icon: "Star",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
            VT Статистика
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Цифры, которые
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              впечатляют
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные результаты наших клиентов за последние 12 месяцев
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon name={stat.icon} size={28} className={stat.color} />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>

                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <Icon
              name="TrendingUp"
              size={48}
              className="text-purple-500 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Средний рост продаж наших клиентов
            </h3>
            <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              +287%
            </div>
            <p className="text-gray-600 text-lg">
              за первые 6 месяцев использования платформы
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
