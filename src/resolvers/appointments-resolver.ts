import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment";
import { Appointment } from "../dtos/models/appointment-model";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async hellowWorld() {
    return "Hello World";
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return appointment;
  }
}
