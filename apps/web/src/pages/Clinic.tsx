import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, Phone, Mail, Navigation, Calendar, Users } from "lucide-react"

export default function ClinicInfo() {
  return (
    <section id="clinic" className="min-h-screen bg-white mt-50 mx-auto px-4 py-8 container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Hours of Operation - Left side, 1/4 width */}
          <div className="lg:col-span-1">
            <div className="bg-muted/50 border border-border rounded-lg p-6 h-fit">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-semibold">Hours</h2>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Mon-Thu</span>
                  <span className="text-muted-foreground">8AM-6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Friday</span>
                  <span className="text-muted-foreground">8AM-5PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="text-muted-foreground">9AM-2PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>

                <Separator className="my-3" />

                <div className="bg-accent/10 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="font-medium text-sm">Emergency</span>
                  </div>
                  <p className="text-xs text-foreground/80">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Directions - Right side, 3/4 width */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Interactive Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg p-8 border border-border">
                <div className="flex items-center justify-center h-64 bg-white/50 dark:bg-black/20 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Interactive Map</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">Click to open in Google Maps</p>
                    <Button variant="outline" className="mt-3 bg-white/80 hover:bg-white">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>

              {/* Directions */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Navigation className="h-5 w-5 text-accent" />
                    Directions & Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-muted-foreground">
                      123 Medical Plaza Drive, Suite 200
                      <br />
                      Healthcare City, HC 12345
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">From Highway 101</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Take Exit 15 (Medical Center Blvd)</li>
                        <li>• Turn right on Medical Plaza Drive</li>
                        <li>• Look for blue "HealthCare Plus" sign</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Parking</h4>
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-foreground">🚗 Free 3-hour validation at reception</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                Contact Information
              </CardTitle>
              <CardDescription>Multiple ways to reach our healthcare team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Main Office</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Phone className="h-5 w-5 text-destructive" />
                  <div>
                    <p className="font-medium">Emergency Line</p>
                    <p className="text-muted-foreground">(555) 911-HELP</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@healthcareplus.com</p>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Schedule Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Services & Specialties */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Services & Specialties
              </CardTitle>
              <CardDescription>Comprehensive healthcare services for all ages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="secondary" className="justify-center py-2">
                  Family Medicine
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  Pediatrics
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  Cardiology
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  Dermatology
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  Orthopedics
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  Women's Health
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  Mental Health
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  Urgent Care
                </Badge>
              </div>

              <Separator className="my-4" />

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">Insurance accepted: Most major insurance plans</p>
                <Button variant="outline" className="w-full bg-transparent">
                  View All Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <Card className="mt-8 shadow-sm">
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-accent">Appointment Policy</h4>
                <p className="text-muted-foreground">
                  Please arrive 15 minutes early for your appointment. Cancellations require 24-hour notice.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">What to Bring</h4>
                <p className="text-muted-foreground">
                  Valid ID, insurance card, current medications list, and any relevant medical records.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Accessibility</h4>
                <p className="text-muted-foreground">
                  Our facility is fully wheelchair accessible with dedicated parking spaces available.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
    </section>
  )
}
