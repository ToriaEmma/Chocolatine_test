#include <iostream>
#include <fstream>
#include <string>

// Fonction pour afficher le contenu d'un fichier
void displayFileContent(const std::string& fileName) {
    std::ifstream file(fileName);

    if (!file.is_open()) {
        // Affiche un message d'erreur si le fichier est inaccessible
        std::cerr << "MyCat: " << fileName << ": No such file or directory" << std::endl;
        throw std::runtime_error("File error");
    }

    // Lit et affiche le contenu du fichier ligne par ligne
    std::string line;
    while (std::getline(file, line)) {
        std::cout << line << std::endl;
    }

    file.close();
}

// Fonction principale
int main(int argc, char* argv[]) {
    try {
        if (argc == 1) {
            // Si aucun fichier n'est passé en paramètre, lire l'entrée standard
            std::string line;
            while (std::getline(std::cin, line)) {
                std::cout << line << std::endl;
            }
        } else {
            // Parcourt chaque fichier passé en paramètre
            for (int i = 1; i < argc; ++i) {
                displayFileContent(argv[i]);
            }
        }
    } catch (...) {
        return 84; // Retourne 84 en cas d'erreur
    }

    return 0;
}
7:13 AM
#include <iostream>
#include <iomanip>
#include <string>
#include <sstream>

// Fonction pour convertir Fahrenheit en Celsius
double fahrenheitToCelsius(double fahrenheit) {
    return 5.0 / 9.0 * (fahrenheit - 32);
}

// Fonction pour convertir Celsius en Fahrenheit
double celsiusToFahrenheit(double celsius) {
    return (celsius * 9.0 / 5.0) + 32;
}

// Fonction principale
int main() {
    std::string line;

    while (std::getline(std::cin, line)) {
        std::istringstream iss(line);
        double temperature;
        std::string scale;

        if (!(iss >> temperature >> scale)) {
            continue; // Ignore les entrées mal formatées
        }

        // Conversion et affichage
        if (scale == "Celsius") {
            std::cout << std::set… Voir plus
7:13 AM
#ifndef STUDENT_HPP
#define STUDENT_HPP

#include <string>
#include <iostream>

class Student {
private:
    std::string name;
    int energy;

public:
    // Constructeur et destructeur
    Student(const std::string& studentName);
    ~Student();

    // Méthodes
    bool learn(const std::string& text);
    void drink(const std::string& drinkName);

    // Accesseur pour le nom
    std::string getName() const;
};

#endif
7:13 AM
#include "Student.hpp"

// Constructeur
Student::Student(const std::string& studentName) : name(studentName), energy(100) {
    std::cout << "Student " << name << ": I'm ready to learn C++." << std::endl;
}

// Destructeur
Student::~Student() {
    std::cout << "Student " << name << ": Wow, much learning today, very smart, such C++." << std::endl;
}

// Méthode learn
bool Student::learn(const std::string& text) {
    if (energy >= 42) {
        energy -= 42;
        std::cout << "Student " << name << ": " << text << std::endl;
        return true;
    } else {
        std::string modifiedText = text;
        size_t pos = 0;
        while ((pos = modifiedText.find("C++", pos)) != std::string::npos) {
            modifiedText.replace(pos, 3, "shit");
            pos += 4;
        }
        std::cout << "Student " << name << ": " << modifiedText << std::endl;
        return false;
    }
}

// Méthode drink
void Student::drink(const std::string& drinkName) {
    if (drinkName == "Red Bull") {
        std::cout << "Student " << name << ": Red Bull gives you wings!" << std::endl;
        energy = std::min(energy + 32, 100);
    } else if (drinkName == "Monster") {
        std::cout << "Student " << name << ": Unleash The Beast!" << std::endl;
        energy = std::min(energy + 64, 100);
    } else {
        std::cout << "Student " << name << ": ah, yes... enslaved moisture." << std::endl;
        energy = std::min(energy + 1, 100);
    }
}

std::string Student::getName() const {
    return name;
}
7:13 AM


