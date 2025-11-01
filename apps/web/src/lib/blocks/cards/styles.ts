export const getColorClasses = (color: string) => {
  const colors = {
    blue: "text-blue-600 bg-blue-50",
    red: "text-red-600 bg-red-50",
    purple: "text-purple-600 bg-purple-50",
    green: "text-green-600 bg-green-50",
    amber: "text-amber-600 bg-amber-50",
    indigo: "text-indigo-600 bg-indigo-50"
  }
  return colors[color as keyof typeof colors] || "text-gray-600 bg-gray-50"
}