const softTexts = {
  "title": {
		ru: "Софт",
		en: "Software",
	},
  "card-title": {
		"1": {
			ru: "DotPulse",
			en: "DotPulse",
		},
		"2": {
			ru: "DotPulse",
			en: "DotPulse",
		},
		"3": {
			ru: "GOA API",
			en: "GOA API",
		},
		"4": {
			ru: "GOA API",
			en: "GOA API",
		},
		"5": {
			ru: "Нейросетевой анализ номерных знаков автомобилей",
			en: "Neural network analysis of vehicle license plates",
		},
		"6": {
			ru: "Нейросетевой анализ номерных знаков автомобилей",
			en: "Neural network analysis of vehicle license plates",
		},
		"7": {
			ru: "Нейросетевой анализ и мониторинг спутниковых снимков",
			en: "Neural network analysis and satellite image monitoring",
		},
		"8": {
			ru: "Нейросетевой анализ и мониторинг спутниковых снимков",
			en: "Neural network analysis and satellite image monitoring",
		},
	},
	"card-desc": {
		"1": {
			ru: "Программа разработана для приборов «DotPulse». В основе расчетов лежит оптическое изображение слоя гранул и алгоритм сегментации каждой гранулы на изображении и аппроксимации ее эллипсом.",
			en: "The software is designed for «DotPulse» devices. The calculations are based on the optical image of a layer of granules and an algorithm for segmenting each granule in the image and approximating it with an ellipse.",
		},
		"2": {
			ru: "API для предоставления данных и использования нейросетевых алгоритмов для анализа изображений гранул удобрений.",
			en: "API for providing data and utilizing neural network algorithms to analyze fertilizer granule images.",
		},
	},
	"card-subtitle": {
		ru: "ПО способно:",
		en: "Software capabilities:",
	},
	"dotPulse-card-item": {
		"1": {
			ru: "проводить расчет физических свойств гранул на изображении (линейные размеры, цвет, форма);",
			en: "to perform calculations on the physical properties of granules within an image, including linear dimensions, color, and shape;",
		},
		"2": {
			ru: "получать и отображать изображения с USB-камеры прибора «DotPulse» (включая высокоскоростные промышленные камеры);",
			en: "to receive and display images from a DotPulse USB camera (including high-speed industrial cameras);",
		},
		"3": {
			ru: "проводить предварительную обработку изображений и использовать классические и нейросетевые алгоритмы для сегментации каждой гранулы;",
			en: "to perform image preprocessing and use both classical and neural network algorithms to segment each granule;",
		},
		"4": {
			ru: "создавать SQL базу данных изображений и рассчитанных свойств с возможностью импорта в *.csv;",
			en: "to create an SQL database of images and calculated properties with the ability to export data to *.csv format;",
		},
		"5": {
			ru: "выполнять анализ статических и динамических изображений гранул (в т.ч. c приборов, установленных над конвейерной лентой, на течке или пересыпке гранул продукта).",
			en: "to perform analysis of static and dynamic images of granules (including those from devices installed above conveyor belts, in streams or during product transfer).",
		},
	},
	"GOA-card-item": {
		"1": {
			ru: "3447 изображений гранул 4 типов удобрений (ДАФ, NPK 15-15-15, NH4NO3, KCl);",
			en: "3447 images of granules of 4 fertilizer types (DAF, NPK 15-15-15, NH4NO3, KCl);",
		},
		"2": {
			ru: "возможность отделения гранул от фона с помощью нейросетевой модели;",
			en: "the ability to separate granules from the background using a neural network model;",
		},
		"3": {
			ru: "определение каждой отдельной гранулы с ее свойствами (инстанс-сегментация) с помощью нейронных сетей;",
			en: "instance segmentation of individual granules with their properties using neural networks;",
		},
		"4": {
			ru: "возможность анализа гранул верхнего слоя гранул вне зависимости от нижних слоев и фона;",
			en: "the ability to analyze the granules of the top layer independently of the underlying layers and background.",
		}
	},
	"NeuralLicencePlate-card-item": {
		"1": {
			ru: "Определение положения номерного знака для вида от 1-го и от 3-го лица (камеры мобильных телефонов, регистраторов и камер наблюдения).",
			en: "Determination of the license plate position from the first and third person perspective using mobile phone cameras, dashcams, and surveillance cameras",
		},
		"2": {
			ru: "Проведение OCR анализа номерного знака для получения текста и региона/страны выпуска.",
			en: "Performing OCR analysis of a license plate to extract text and determine the issuing region/country.",
		},
		"3": {
			ru: "Возможность реализации API сервиса, в том числе для локальной установки.",
			en: "The possibility of implementing an API service, including the option for local deployment.",
		}
	},
	"NeuralSatellite-card-item": {
		"1": {
			ru: "Получение спутниковых данных из открытых источников (Google EE, Copernicus).",
			en: "Acquiring satellite data from publicly available platforms (Google Earth Engine, Copernicus).",
		},
		"2": {
			ru: "Проведение классификации изображений.",
			en: "Performing image classification.",
		},
		"3": {
			ru: "Построение временных рядов из наблюдений.",
			en: "Developing time series from observational data.",
		},
		"4": {
			ru: "Поиск и построение корреляций спутниковых снимков и результатов анализа наземных данных (дорожная сцена, лаборатории по РМ2.5, РМ10, промышленное производство).",
			en: "Identifying and quantifying correlations between satellite remote sensing data and ground-based measurements (e.g., road traffic, PM2.5 and PM10 laboratory data, industrial output).",
		},
		"5": {
			ru: "Возможность реализации API сервиса, в том числе для локальной установки.",
			en: "The possibility of implementing an API service, including the option for local deployment.",
		}
	},
}

export { softTexts }