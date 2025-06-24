import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FAQ = () => {
  const faqs = [
    {
      question: "Как быстро можно внедрить систему?",
      answer:
        "Базовое внедрение занимает 1-2 дня. Полная настройка под ваши процессы - до 1 недели. Наши специалисты помогут с миграцией данных и обучением команды.",
    },
    {
      question: "Можно ли интегрировать с существующими системами?",
      answer:
        "Да, у нас есть готовые интеграции с ЦИАН, Авито, банками, 1С, и API для подключения любых систем. Настройка интеграций входит в тарифы Pro и Enterprise.",
    },
    {
      question: "Какая стоимость дополнительных пользователей?",
      answer:
        "Стандартный тариф включает до 10 пользователей. Каждый дополнительный пользователь - 800 рублей в месяц. В корпоративном тарифе пользователи безлимитны.",
    },
    {
      question: "Насколько безопасны данные клиентов?",
      answer:
        "Мы используем шифрование AES-256, регулярное резервное копирование и соответствуем требованиям GDPR. Данные хранятся в защищенных ЦОД в России.",
    },
    {
      question: "Есть ли мобильное приложение?",
      answer:
        "Да, у нас есть полнофункциональные приложения для iOS и Android. Все возможности веб-версии доступны в мобильном приложении.",
    },
    {
      question: "Какая техническая поддержка предоставляется?",
      answer:
        "Базовый тариф включает поддержку в рабочие часы. Pro и Enterprise - круглосуточная поддержка с гарантированным временем ответа до 15 минут.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Часто задаваемые
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              вопросы
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на популярные вопросы о нашей CRM-системе
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon
                        name="HelpCircle"
                        size={16}
                        className="text-white"
                      />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                      {faq.question}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-16">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-8">
                <Icon
                  name="MessageCircle"
                  size={48}
                  className="text-purple-500 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Не нашли ответ на свой вопрос?
                </h3>
                <p className="text-gray-600 mb-6">
                  Наши эксперты готовы помочь вам разобраться с любыми вопросами
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center text-gray-700">
                    <Icon
                      name="Phone"
                      size={16}
                      className="mr-2 text-purple-500"
                    />
                    +7 (495) 123-45-67
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Icon
                      name="Mail"
                      size={16}
                      className="mr-2 text-purple-500"
                    />
                    support@crm-realty.ru
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
