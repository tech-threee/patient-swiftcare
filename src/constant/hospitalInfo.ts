type HospitalInfo = {
  name: string;
  address: string;
  hospitalDescription: string;
  phone: string;
  email: string;
  years: string;
  hospitalLocation: string;
  clientSatisfactory: string;
  image: string;
};

export const hospitalInfo: HospitalInfo = {
  name: "swiftCare Hospital",
  address: "123 Main Street, Accra",
  hospitalDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  phone: "+233 54736 3882",
  email: "swiftcareHospital@gmail.com",
  years: "10",
  hospitalLocation: "Accra, Spintex",
  clientSatisfactory: "98%",
  image: "../assets/images/hero-img01.png",
};
