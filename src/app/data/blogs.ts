export type BlogPost = {
  title: string;
  href: string;
  platform: "Medium";
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Create a Cloud Storage Bucket Using IaC with Pulumi",
    href: "https://medium.com/@risni.jeeva/create-a-cloud-storage-bucket-using-iac-with-pulumi-85e87bce6fe1",
    platform: "Medium",
    tags: ["Pulumi", "IaC", "GCP", "DevOps"],
  },
  {
    title: "Kafka Integration with Spring Boot and Java: A Practical Guide",
    href: "https://medium.com/@risni.jeeva/kafka-integration-with-spring-boot-and-java-a-practical-guide-b8b0c61a1ab1",
    platform: "Medium",
    tags: ["Kafka", "Spring Boot", "Java"],
  },
  {
    title: "Thread-Safe Singleton in Java: All Approaches Explained",
    href: "https://medium.com/@risni.jeeva/thread-safe-singleton-in-java-all-approaches-explained-ea5b33841fe4",
    platform: "Medium",
    tags: ["Java", "Concurrency", "Design Patterns"],
  },
];

