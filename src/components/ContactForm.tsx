import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы увеличить
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                продажи?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Оставьте заявку и получите персональную демонстрацию CRM-системы.
              Покажем, как увеличить конверсию на 200% уже в первый месяц.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                "Бесплатная консультация эксперта",
                "Персональная настройка под ваши процессы",
                "Тестовый период 14 дней бесплатно",
                "Помощь с миграцией данных",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="Phone" size={20} className="text-purple-400 mr-3" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={20} className="text-purple-400 mr-3" />
                <span className="text-gray-300">sales@crm-realty.ru</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="MapPin"
                  size={20}
                  className="text-purple-400 mr-3"
                />
                <span className="text-gray-300">
                  Москва, ул. Тестовая, д. 123
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Получить демо
              </CardTitle>
              <p className="text-gray-300">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                />
                <Input
                  placeholder="Название компании"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                />
                <textarea
                  placeholder="Расскажите о ваших задачах"
                  rows={4}
                  className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:outline-none resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl">
                <Icon name="Send" size={20} className="mr-2" />
                Получить демо бесплатно
              </Button>

              <p className="text-xs text-gray-400 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
