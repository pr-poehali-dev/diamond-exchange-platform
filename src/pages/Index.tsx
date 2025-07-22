import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DiamondExchange = () => {
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  
  const marketStats = [
    { label: "Общий объем", value: "$847M", change: "+12.4%" },
    { label: "Активные лоты", value: "2,847", change: "+5.8%" },
    { label: "Средний ROI", value: "18.2%", change: "+2.1%" },
    { label: "Индекс цен", value: "142.8", change: "+0.9%" },
  ];

  const diamonds = [
    {
      id: 1,
      carat: 2.45,
      color: "D",
      clarity: "FL",
      cut: "Excellent",
      price: "$45,000",
      roi: "+15.2%",
      certificate: "GIA",
      image: "/img/24af8aec-3545-4563-abd7-768dcc4f9d16.jpg",
    },
    {
      id: 2,
      carat: 1.84,
      color: "F",
      clarity: "VVS1",
      cut: "Ideal",
      price: "$28,500",
      roi: "+22.1%",
      certificate: "GIA",
      image: "/img/bbb81042-4cca-4a54-958f-d01d1ad3d115.jpg",
    },
    {
      id: 3,
      carat: 3.12,
      color: "E",
      clarity: "VS1",
      cut: "Excellent",
      price: "$72,800",
      roi: "+8.9%",
      certificate: "AGS",
      image: "/img/07c102c5-a3d8-41c5-a303-c3a9fb616a26.jpg",
    },
  ];

  const portfolioData = [
    { asset: "Розовые алмазы", allocation: 35, value: "$2.1M" },
    { asset: "Белые алмазы премиум", allocation: 45, value: "$2.7M" },
    { asset: "Желтые алмазы", allocation: 15, value: "$900K" },
    { asset: "Голубые алмазы", allocation: 5, value: "$300K" },
  ];

  const priceData = [
    { month: "Янв", value: 95000 },
    { month: "Фев", value: 98000 },
    { month: "Мар", value: 102000 },
    { month: "Апр", value: 108000 },
    { month: "Май", value: 112000 },
    { month: "Июн", value: 118000 },
    { month: "Июл", value: 125000 },
    { month: "Авг", value: 131000 },
    { month: "Сен", value: 128000 },
    { month: "Окт", value: 134000 },
    { month: "Ноя", value: 142000 },
    { month: "Дек", value: 148000 },
  ];

  const indexData = [
    { day: "1", price: 138 },
    { day: "2", price: 142 },
    { day: "3", price: 139 },
    { day: "4", price: 145 },
    { day: "5", price: 148 },
    { day: "6", price: 144 },
    { day: "7", price: 147 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Diamond" size={32} className="text-gold" />
              <h1 className="text-2xl font-bold text-foreground">DIAMOND EXCHANGE</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Портфолио
              </Button>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Аналитика
              </Button>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Торговля
              </Button>
              <Button className="bg-gold hover:bg-gold-dark text-black font-medium">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Премиальная платформа
              <span className="text-gold block">инвестиций в алмазы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональная торговля сертифицированными алмазами с гарантией подлинности 
              и максимальной доходностью для серьезных инвесторов.
            </p>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marketStats.map((stat, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="catalog" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="catalog" className="flex items-center space-x-2">
                <Icon name="Gem" size={16} />
                <span>Каталог алмазов</span>
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="flex items-center space-x-2">
                <Icon name="BarChart3" size={16} />
                <span>Портфолио</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} />
                <span>Аналитика</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="catalog" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">Премиальные лоты</h3>
                <div className="flex space-x-3">
                  <Button variant="outline" className="border-border">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Фильтры
                  </Button>
                  <Button variant="outline" className="border-border">
                    <Icon name="ArrowUpDown" size={16} className="mr-2" />
                    Сортировка
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {diamonds.map((diamond) => (
                  <Card key={diamond.id} className="border-border hover:shadow-lg transition-all duration-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{diamond.carat} карат</CardTitle>
                        <Badge className="bg-gold/10 text-gold border-gold/20">
                          {diamond.certificate}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-center py-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={diamond.image} 
                          alt={`Алмаз ${diamond.carat} карат`}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Цвет:</span>
                          <span className="ml-2 font-medium">{diamond.color}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Чистота:</span>
                          <span className="ml-2 font-medium">{diamond.clarity}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Огранка:</span>
                          <span className="ml-2 font-medium">{diamond.cut}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">ROI:</span>
                          <span className="ml-2 font-medium text-green-600">{diamond.roi}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <p className="text-2xl font-bold text-foreground">{diamond.price}</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              className="bg-gold hover:bg-gold-dark text-black font-medium"
                              onClick={() => setSelectedDiamond(diamond)}
                            >
                              Купить
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle className="flex items-center space-x-2">
                                <Icon name="Diamond" size={20} className="text-gold" />
                                <span>Покупка алмаза {diamond.carat} карат</span>
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6 py-4">
                              <div className="flex justify-center">
                                <img 
                                  src={diamond.image} 
                                  alt={`Алмаз ${diamond.carat} карат`}
                                  className="w-40 h-40 object-cover rounded-lg"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Вес:</span>
                                    <span className="font-medium">{diamond.carat} карат</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Цвет:</span>
                                    <span className="font-medium">{diamond.color}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Чистота:</span>
                                    <span className="font-medium">{diamond.clarity}</span>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Огранка:</span>
                                    <span className="font-medium">{diamond.cut}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">ROI:</span>
                                    <span className="font-medium text-green-600">{diamond.roi}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Сертификат:</span>
                                    <span className="font-medium">{diamond.certificate}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="border-t pt-4">
                                <div className="flex items-center justify-between mb-4">
                                  <span className="text-lg font-semibold">Стоимость:</span>
                                  <span className="text-2xl font-bold text-foreground">{diamond.price}</span>
                                </div>
                                <div className="flex space-x-3">
                                  <Button className="flex-1 bg-gold hover:bg-gold-dark text-black font-medium">
                                    <Icon name="CreditCard" size={16} className="mr-2" />
                                    Купить сейчас
                                  </Button>
                                  <Button variant="outline" className="flex-1">
                                    <Icon name="Heart" size={16} className="mr-2" />
                                    В избранное
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="portfolio" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">Инвестиционное портфолио</h3>
                <Badge className="bg-green-100 text-green-800 border-green-200 text-base px-3 py-1">
                  Общая стоимость: $6.0M
                </Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="PieChart" size={20} className="mr-2" />
                      Распределение активов
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {portfolioData.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground">{item.asset}</span>
                          <span className="text-muted-foreground">{item.value}</span>
                        </div>
                        <Progress value={item.allocation} className="h-2" />
                        <p className="text-xs text-muted-foreground">{item.allocation}% портфолио</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="TrendingUp" size={20} className="mr-2" />
                      Динамика доходности
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={priceData}>
                          <CartesianGrid strokeDasharray="3 3" className="opacity-20" />
                          <XAxis dataKey="month" fontSize={12} className="text-muted-foreground" />
                          <YAxis fontSize={12} className="text-muted-foreground" />
                          <Tooltip 
                            formatter={["$[0]", "Доходность"]}
                            labelStyle={{ color: "black" }}
                            contentStyle={{ backgroundColor: "white", border: "1px solid #ccc" }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#c9a961" 
                            fill="#c9a961" 
                            fillOpacity={0.2}
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Рыночная аналитика</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Activity" size={20} className="mr-2" />
                      Индекс цен на алмазы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={indexData}>
                          <CartesianGrid strokeDasharray="3 3" className="opacity-20" />
                          <XAxis dataKey="day" fontSize={12} className="text-muted-foreground" />
                          <YAxis fontSize={12} className="text-muted-foreground" />
                          <Tooltip 
                            formatter={[[0], "Индекс"]}
                            labelStyle={{ color: "black" }}
                            contentStyle={{ backgroundColor: "white", border: "1px solid #ccc" }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#3b82f6" 
                            strokeWidth={3}
                            dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Globe" size={20} className="mr-2" />
                      Мировые тренды
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Розовые алмазы</span>
                        <Badge className="bg-green-100 text-green-800">+18.5%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Желтые алмазы</span>
                        <Badge className="bg-green-100 text-green-800">+12.3%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Белые алмазы D-F</span>
                        <Badge className="bg-green-100 text-green-800">+8.7%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Голубые алмазы</span>
                        <Badge className="bg-yellow-100 text-yellow-800">+2.1%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Diamond" size={24} className="text-gold" />
                <span className="font-bold text-lg">DIAMOND EXCHANGE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиальная платформа для инвестиций в сертифицированные алмазы
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Торговля</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Каталог алмазов</li>
                <li>Аукционы</li>
                <li>Быстрые сделки</li>
                <li>История торгов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Аналитика</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Рыночные индексы</li>
                <li>Прогнозы экспертов</li>
                <li>Отчеты по сегментам</li>
                <li>Исторические данные</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Центр помощи</li>
                <li>Обучение</li>
                <li>API документация</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Diamond Exchange. Все права защищены. Лицензия FINRA/SIPC
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DiamondExchange;